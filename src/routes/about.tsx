import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Avatar } from '@/components/ui/Avatar'
import { NewsletterBand } from '@/components/layout/NewsletterBand'
import { authors, aboutCopy } from '@/lib/content'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  const tenets = [
    { title: 'Verify', description: 'Every claim traced to a source. We name how we know what we know.' },
    { title: 'Correct', description: 'Mistakes happen. We print the correction, dated, in the open.' },
    { title: 'Separate', description: 'Coverage and promotion do not mix. Independence is non-negotiable.' },
  ]

  const masthead = authors

  return (
    <>
      <div className="page-wrap px-4 py-12 sm:py-16">
        <header className="max-w-2xl mb-10">
        <h1 className="font-playfair fs-display-lg text-[var(--ink)] leading-tight mb-5 max-w-[18ch]">
          An independent editorial desk.
        </h1>
        <div className="font-body text-lg leading-[1.75] text-[var(--ink)] space-y-5">
          <p>{aboutCopy.lede}</p>
          {aboutCopy.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        </header>

        <section className="max-w-2xl mb-16 p-8 bg-[var(--maroon)] rounded-lg text-ivory">
          <h2 className="font-playfair fs-display-md text-ivory mb-3">Editorial independence</h2>
          <p className="font-gambetta fs-standfirst text-ivory72">hoodmanlive is published by an independent editorial property. Organisations we report on appear only as subjects. No house framing, no promotional tilt, every correction printed.</p>
        </section>

        <section className="max-w-2xl mb-16" aria-labelledby="tenets-heading">
          <h2 id="tenets-heading" className="font-playfair fs-display-md text-[var(--ink)] mb-8">What we hold to</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {tenets.map((tenet, i) => (
              <article key={i} className="relative bg-[var(--ivory)] rounded-lg overflow-hidden p-5 space-y-2 pt-4 border-t-3 border-[var(--gold)]" tabIndex={0}>
                <h3 className="font-clash font-semibold text-[var(--ink)]">{tenet.title}</h3>
                <p className="font-body text-sm text-[var(--ink-soft)]">{tenet.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-4xl" aria-labelledby="desk-heading">
          <h2 id="desk-heading" className="font-playfair fs-display-md text-[var(--ink)] mb-8">The desk</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {masthead.map((person) => (
              <article key={person.name} className="relative bg-[var(--ivory)] rounded-lg overflow-hidden p-5 space-y-2 pt-4 border-t border-[var(--border-line)]" tabIndex={0}>
                <Avatar name={person.name} size="lg" className="mb-3" />
                <Link to={`/authors/${person.slug}`} className="font-clash font-semibold text-[var(--ink)] hover:text-[var(--maroon)] transition-colors block">{person.name}</Link>
                <p className="font-body text-sm text-[var(--ink-soft)]">{person.role}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <NewsletterBand />
    </>
  )
}