import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { formatDate } from '#/lib/utils'
import { NewsletterBand } from '#/components/layout/NewsletterBand'
import { getEvent } from '#/lib/content'

export const Route = createFileRoute('/events/$slug')({ component: EventDetailPage })

function EventDetailPage() {
  const route = Route.useParams()
  const event = getEvent(route.slug)

  if (!event) {
    return (
      <div className="page-wrap px-4 py-16">
        <h1 className="font-playfair fs-display-md text-[var(--ink)]">Event not found</h1>
        <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] mt-3">
          <Link to="/events" className="text-[var(--maroon)] no-underline">Back to Events</Link>.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="page-wrap px-4 py-12 sm:py-16">
        <article className="max-w-3xl mx-auto mb-16">
          <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--gold)]/10 mb-6 flex items-center justify-center">
            <span className="text-[var(--ink-soft)] text-sm font-body">{event.name}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <time className="font-clash text-xs uppercase tracking-wider text-[var(--orange)]">{formatDate(event.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="font-body text-sm text-[var(--ink-soft)]">{event.venue}, {event.city}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center font-clash text-xs uppercase tracking-wider px-2 py-0.5 rounded-full border text-[var(--maroon)] border-[var(--maroon)]">
              {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
            </span>
          </div>
          <h1 className="font-playfair fs-display-lg text-[var(--ink)] leading-tight mb-4">{event.name}</h1>
          <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] mb-6">{event.excerpt}</p>
          <div className="font-body text-[var(--ink-soft)]">
            {event.body.map((para, i) => (
              <p key={i} className="mb-4">{para}</p>
            ))}
          </div>
        </article>

        {event.status === 'past' && (
          <section className="max-w-3xl mx-auto mb-16 p-6 bg-[var(--navy)] rounded-lg text-ivory" aria-labelledby="report-heading">
            <h2 id="report-heading" className="font-playfair fs-display-md text-ivory mb-3">Post-Event Report</h2>
            <p className="font-gambetta fs-standfirst text-ivory72 mb-4">
              The full, sourced record of the event — outcomes, evidence, and next steps.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-1 font-clash font-semibold text-[var(--gold)] hover:text-ivory transition-colors no-underline"
            >
              Read the report <span aria-hidden="true">→</span>
            </Link>
          </section>
        )}
      </div>
      <NewsletterBand />
    </>
  )
}
