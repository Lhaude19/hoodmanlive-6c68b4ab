import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
)

// Newsletter subscription
export async function subscribeToNewsletter(email: string, source = 'hoodmanlive') {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert({ email, source })
    .select()
    .single()

  return { data, error }
}

// Email confirmation (called from Edge Function)
export async function confirmSubscription(token: string) {
  const { data, error } = await supabase.rpc('confirm_subscription', { token })
  return { data, error }
}