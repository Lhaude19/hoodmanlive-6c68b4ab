import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useState, FormEvent } from 'react'

const SUPABASE_URL = 'https://psikyjrwidnqpwujkaou.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_9oJxctjQNMTmpNWRpbutgA_PnDEqYCp'

export interface NewsletterBandProps {
  className?: string
}

export function NewsletterBand({ className }: NewsletterBandProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email, source: 'hoodmanlive' }),
      })

      if (!res.ok) {
        const error = await res.json().catch(() => ({}))
        throw new Error(error.message || 'Subscription failed')
      }

      setStatus('success')
      setMessage('You are on the list. Check your inbox to confirm.')
      setEmail('')
    } catch (err: any) {
      setStatus('error')
      setMessage(err.message === 'Duplicate key value violates unique constraint' 
        ? 'You are already subscribed.' 
        : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section
      className={cn(
        'bg-[var(--navy)] relative',
        className
      )}
      aria-labelledby="newsletter-heading"
    >
      <div className="page-wrap px-4 py-12 sm:py-16 relative">
        <header className="max-w-md mb-8">
          <h2 id="newsletter-heading" className="font-playfair fs-display-md text-ivory mb-3">
            The Dispatch
          </h2>
          <p className="font-gambetta fs-standfirst text-ivory72">
            A weekly editorial digest — no marketing, just the stories that matter. Sent every Friday.
          </p>
        </header>
        <form onSubmit={handleSubmit} className="max-w-md" noValidate>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading' || status === 'success'}
              className="flex-1"
              aria-describedby={status === 'success' ? 'newsletter-success' : status === 'error' ? 'newsletter-error' : undefined}
            />
            <Button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </Button>
          </div>
          {status === 'success' && (
            <p id="newsletter-success" className="mt-3 text-sm text-[var(--gold)]" role="status" aria-live="polite">
              {message}
            </p>
          )}
          {status === 'error' && (
            <p id="newsletter-error" className="mt-3 text-sm text-[var(--error)]" role="alert">
              {message}
            </p>
          )}
          <p className="mt-3 text-xs text-ivory56 text-center">
            By subscribing you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  )
}