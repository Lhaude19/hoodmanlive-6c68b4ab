import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
})

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
