import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Card, CardContent } from '#/components/ui/Card'
import { NewsletterBand } from '#/components/layout/NewsletterBand'
import { programs } from '#/lib/content'

export const Route = createFileRoute('/programs')({ component: ProgramsPage })

function ProgramsPage() {
  return (
    <>
      <div className="page-wrap px-4 py-12 sm:py-16">
        <header className="mb-10">
          <h1 className="font-playfair fs-display-lg text-[var(--ink)] mb-3">Programs</h1>
          <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] max-w-2xl">
            Long-running editorial initiatives we follow over time — convenings, mentorship desks, and report series. Reported, not promoted.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article key={program.slug} className="relative bg-[var(--ivory)] rounded-lg overflow-hidden group" tabIndex={0}>
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--gold)]/10 flex items-center justify-center">
                <span className="text-[var(--ink-soft)] text-sm font-body">{program.name}</span>
              </div>
              <div className="h-[3px] bg-[var(--gold)]" aria-hidden="true" />
              <CardContent className="p-5 space-y-3 pt-4">
                <span className="font-clash text-xs uppercase tracking-wider text-[var(--orange)]">Program</span>
                <Link to={`/programs/${program.slug}`} className="block">
                  <h2 className="font-playfair text-xl font-bold leading-snug text-[var(--ink)] group-hover:text-[var(--maroon)] transition-colors mb-2">
                    {program.name}
                  </h2>
                </Link>
                <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] mb-3">{program.description}</p>
                <Link
                  to={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-clash font-medium text-[var(--maroon)] hover:text-[var(--gold)] transition-colors no-underline"
                >
                  View program <span aria-hidden="true">→</span>
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
