import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Avatar } from '#/components/ui/Avatar'
import { formatDate } from '#/lib/utils'
import { NewsletterBand } from '#/components/layout/NewsletterBand'
import { authors, articles, getAuthor } from '#/lib/content'

export const Route = createFileRoute('/authors/$slug')({ component: AuthorDetailPage })

function AuthorDetailPage() {
  const route = Route.useParams()
  const author = getAuthor(route.slug) || authors[0]

  const recentWork = articles
    .filter((a) => a.authorSlug === author.slug)
    .slice(0, 5)

  return (
    <>
      <div className="page-wrap px-4 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <Avatar name={author.name} size="xl" />
            <div>
              <span className="font-clash text-xs uppercase tracking-wider text-[var(--orange)] block mb-1">
                {author.role}
              </span>
              <h1 className="font-playfair fs-display-md text-[var(--ink)] mb-3">
                {author.name}
              </h1>
            </div>
          </div>

          <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] leading-relaxed mb-12">
            {author.bio}
          </p>

          <section aria-labelledby="recent-work-heading">
            <h2 id="recent-work-heading" className="font-playfair fs-display-sm text-[var(--ink)] mb-6 border-b border-[var(--border-line)] pb-3">
              Recent work
            </h2>
            {recentWork.length === 0 ? (
              <p className="font-body text-sm text-[var(--ink-soft)]">More reporting coming soon.</p>
            ) : (
              <div className="space-y-6">
                {recentWork.map((item) => (
                  <article key={item.slug} className="relative bg-[var(--ivory)] rounded-lg overflow-hidden group p-5 border-t-3 border-[var(--gold)]" tabIndex={0}>
                    <span className="font-clash text-xs uppercase tracking-wider text-[var(--orange)] block mb-1">
                      {item.category}
                    </span>
                    <Link to={`/article/${item.slug}`} className="block">
                      <h3 className="font-playfair text-lg font-bold leading-snug text-[var(--ink)] group-hover:text-[var(--maroon)] transition-colors mb-2">
                        {item.title}
                      </h3>
                    </Link>
                    <time dateTime={item.publishedAt} className="text-xs font-body text-[var(--ink-soft)]">
                      {formatDate(item.publishedAt)}
                    </time>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
      <NewsletterBand />
    </>
  )
}
