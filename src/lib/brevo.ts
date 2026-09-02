/**
 * Brevo (formerly Sendinblue) integration for newsletter subscriptions.
 *
 * Uses the Double Opt-In (DOI) flow:
 * 1. POST /v3/contacts/doubleOptinConfirmation — creates a pending contact
 * 2. Brevo sends a confirmation email
 * 3. Contact is moved to the final list after clicking the confirmation link
 *
 * @see https://developers.brevo.com/reference/create-doi-contact
 */
export interface BrevoContact {
  email: string
  listId: number
  redirectionUrl?: string
  templateId?: number
  attributes?: Record<string, string | string[] | number | boolean>
}

export interface BrevoResponse {
  success: boolean
  message: string
}

/**
 * Subscribe a contact via Brevo's Double Opt-In flow.
 * The contact receives a confirmation email; only confirmed contacts are added to the list.
 */
export async function subscribeToBrevo(params: BrevoContact): Promise<BrevoResponse> {
  const apiKey = import.meta.env.VITE_BREVO_API_KEY
  const baseUrl = import.meta.env.VITE_BREVO_API_URL || 'https://api.brevo.com/v3'

  if (!apiKey) {
    return {
      success: false,
      message: 'Brevo API key not configured. Please set VITE_BREVO_API_KEY in your environment.',
    }
  }

  try {
    const res = await fetch(`${baseUrl}/contacts/doubleOptinConfirmation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: params.email,
        includeListIds: [params.listId],
        ...(params.redirectionUrl && { redirectionUrl: params.redirectionUrl }),
        ...(params.templateId && { templateId: params.templateId }),
        ...(params.attributes && { attributes: params.attributes }),
      }),
    })

    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: 'Unknown error' }))
      return {
        success: false,
        message: error.message || `Subscription failed (HTTP ${res.status})`,
      }
    }

    return {
      success: true,
      message: 'Check your inbox to confirm your subscription.',
    }
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : 'Network error — please try again.',
    }
  }
}

/**
 * Default list ID and template ID for hoodmanlive newsletter.
 * These should be configured in the Brevo dashboard.
 */
export const NEWSLETTER_CONFIG = {
  listId: 1, // TEMPORARY_DOUBLE_OPT_IN list in Brevo
  templateId: 1, // DOI confirmation email template
  redirectionUrl: 'https://hoodmanlive.com/subscribe/confirm',
}
