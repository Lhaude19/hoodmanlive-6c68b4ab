import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Card, CardContent } from '#/components/ui/Card'
import { formatDate } from '#/lib/utils'
import { NewsletterBand } from '#/components/layout/NewsletterBand'
import { useState } from 'react'
import { events } from '#/lib/content'

export const Route = createFileRoute('/events')({ component: EventsPage })

function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  const upcoming = events.filter((e) => e.status === 'upcoming')
  const past = events.filter((e) => e.status === 'past')
  const list = activeTab === 'upcoming' ? upcoming : past

  return (
    <>
      <div className="page-wrap px-4 py-12 sm:py-16">
        <header className="mb-10">
          <h1 className="font-playfair fs-display-lg text-[var(--ink)] mb-3">Events</h1>
          <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] max-w-2xl">
            Conferences, convenings, and honours nights we report on. Covered independently — we attend, we write.
          </p>
        </header>

        <div className="flex gap-5 border-b border-[var(--border-line)] mb-10" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'upcoming'}
            onClick={() => setActiveTab('upcoming')}
            className="font-clash text-sm uppercase tracking-wider py-3 border-b-3 transition-colors min-h-[44px] flex items-center"
            style={{ borderColor: activeTab === 'upcoming' ? 'var(--gold)' : 'transparent', color: activeTab === 'upcoming' ? 'var(--ink)' : 'var(--ink-soft)' }}
          >
            Upcoming
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'past'}
            onClick={() => setActiveTab('past')}
            className="font-clash text-sm uppercase tracking-wider py-3 border-b-3 transition-colors min-h-[44px] flex items-center"
            style={{ borderColor: activeTab === 'past' ? 'var(--gold)' : 'transparent', color: activeTab === 'past' ? 'var(--ink)' : 'var(--ink-soft)' }}
          >
            Past
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((event) => (
            <article key={event.slug} className="relative bg-[var(--ivory)] rounded-lg overflow-hidden group" tabIndex={0}>
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--gold)]/10 flex items-center justify-center">
                <span className="text-[var(--ink-soft)] text-sm font-body">{event.name}</span>
              </div>
              <div className="h-[3px] bg-[var(--gold)]" aria-hidden="true" />
              <CardContent className="p-5 space-y-3 pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <time className="font-clash text-xs uppercase tracking-wider text-[var(--orange)]">
                    {formatDate(event.date)} · {event.city}
                  </time>
                  <span className={`inline-flex items-center font-clash text-xs uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    event.status === 'upcoming'
                      ? 'text-[var(--maroon)] border-[var(--maroon)]'
                      : 'text-[var(--ink-soft)] border-[var(--border-line)]'
                  }`}>
                    {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                </div>
                <Link to={`/events/${event.slug}`} className="block">
                  <h2 className="font-playfair text-xl font-bold leading-snug text-[var(--ink)] group-hover:text-[var(--maroon)] transition-colors mb-2">
                    {event.name}
                  </h2>
                </Link>
                <p className="font-body text-sm text-[var(--ink-soft)] mb-3">{event.excerpt}</p>
                <Link
                  to={`/events/${event.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-clash font-medium text-[var(--maroon)] hover:text-[var(--gold)] transition-colors no-underline"
                >
                  {event.status === 'upcoming' ? 'Event details' : 'Read report'} <span aria-hidden="true">→</span>
                </Link>
              </CardContent>
            </article>
          ))}
        </div>
      </div>
      <NewsletterBand />
    </>
  )
}
