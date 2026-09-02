import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Avatar } from '#/components/ui/Avatar'
import { NewsletterBand } from '#/components/layout/NewsletterBand'
import { getProgram, getAuthor } from '#/lib/content'

export const Route = createFileRoute('/programs/$slug')({ component: ProgramDetailPage })

function ProgramDetailPage() {
  const route = Route.useParams()
  const program = getProgram(route.slug)

  if (!program) {
    return (
      <div className="page-wrap px-4 py-16">
        <h1 className="font-playfair fs-display-md text-[var(--ink)]">Program not found</h1>
        <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] mt-3">
          <Link to="/programs" className="text-[var(--maroon)] no-underline">Back to Programs</Link>.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="page-wrap px-4 py-12 sm:py-16">
        <article className="max-w-3xl mx-auto mb-16">
          <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--gold)]/10 mb-6 flex items-center justify-center">
            <span className="text-[var(--ink-soft)] text-sm font-body">{program.name}</span>
          </div>
          <span className="font-clash text-xs uppercase tracking-wider text-[var(--orange)] mb-2 inline-block">Program</span>
          <h1 className="font-playfair fs-display-lg text-[var(--ink)] leading-tight mb-4">{program.name}</h1>
          <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] mb-6">{program.description}</p>
          <div className="font-body text-[var(--ink-soft)] text-sm space-y-4">
            {program.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>

        {program.moderators.length > 0 && (
          <section className="max-w-3xl mx-auto" aria-labelledby="moderators-heading">
            <h2 id="moderators-heading" className="font-playfair fs-display-md text-[var(--ink)] mb-6">Moderators</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {program.moderators.map((name) => {
                const author = getAuthor(
                  name.toLowerCase().replace(/[^a-z]+/g, '-').replace(/(^-|-$)/g, '')
                )
                const slug = author?.slug ?? 'editorial-desk'
                return (
                  <article key={name} className="flex gap-4">
                    <Avatar name={name} size="lg" />
                    <div className="flex flex-col justify-center">
                      <Link to={`/authors/${slug}`} className="font-clash font-semibold text-[var(--ink)] hover:text-[var(--maroon)] transition-colors">
                        {name}
                      </Link>
                      <p className="font-body text-sm text-[var(--ink-soft)]">Moderator</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        )}
      </div>
      <NewsletterBand />
    </>
  )
}
