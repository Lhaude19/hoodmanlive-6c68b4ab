import { createFileRoute } from '@tanstack/react-router'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { subscribeToBrevo, NEWSLETTER_CONFIG } from '@/lib/brevo'
import { useState } from 'react'
import type { FormEvent } from 'react'

export const Route = createFileRoute('/subscribe')({ component: SubscribePage })

function SubscribePage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const result = await subscribeToBrevo({
        email,
        listId: NEWSLETTER_CONFIG.listId,
        templateId: NEWSLETTER_CONFIG.templateId,
        redirectionUrl: NEWSLETTER_CONFIG.redirectionUrl,
        attributes: { SOURCE: 'hoodmanlive' },
      })

      if (!result.success) {
        throw new Error(result.message)
      }

      setStatus('success')
      setMessage(result.message)
      setEmail('')
    } catch (err: any) {
      setStatus('error')
      setMessage(err.message.includes('already subscribe')
        ? 'You are already subscribed.'
        : err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <div className="page-wrap px-4 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <header className="mb-10">
            <h1 className="font-playfair fs-display-lg text-[var(--ink)] mb-4">The Dispatch</h1>
            <p className="font-gambetta fs-standfirst text-[var(--ink-soft)]">
              A weekly editorial digest — no marketing, just the stories that matter. Sent every Friday.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Input
              type="email"
              id="subscribe-email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading' || status === 'success'}
              className="text-center text-lg py-4"
              aria-describedby={status === 'success' ? 'subscribe-success' : status === 'error' ? 'subscribe-error' : undefined}
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === 'loading' || status === 'success'}
              className="w-full"
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </Button>

            {status === 'success' && (
              <p id="subscribe-success" className="text-sm text-[var(--gold)]" role="status" aria-live="polite">
                {message}
              </p>
            )}
            {status === 'error' && (
              <p id="subscribe-error" className="text-sm text-[var(--error)]" role="alert">
                {message}
              </p>
            )}

            <p className="text-xs text-[var(--ink-soft)]">
              By subscribing you agree to our privacy policy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}