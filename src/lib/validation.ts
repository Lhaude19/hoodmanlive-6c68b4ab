import { z } from 'zod'

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Enter a valid email address')
  .max(254, 'Email is too long')

export const newsletterSchema = z.object({
  email: emailSchema,
  source: z.string().optional().default('hoodmanlive'),
})

export type NewsletterInput = z.infer<typeof newsletterSchema>

export const honeypotSchema = z.object({
  website: z.string().optional(), // honeypot field - should be empty
}).refine((data) => !data.website, {
  message: 'Spam detected',
  path: ['website'],
})

export function validateNewsletter(input: unknown) {
  const result = newsletterSchema.safeParse(input)
  const honeypot = honeypotSchema.safeParse(input)

  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors }
  }
  if (!honeypot.success) {
    return { success: false, error: { spam: ['Submission rejected'] } }
  }
  return { success: true, data: result.data }
}