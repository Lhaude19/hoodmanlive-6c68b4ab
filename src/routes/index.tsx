import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { NewsletterBand } from '@/components/layout/NewsletterBand'
import { articles } from '@/lib/content'
import { Avatar } from '@/components/ui/Avatar'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const lead = articles[0]
  const latest = articles
    .filter((a) => a.slug !== lead.slug)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return (
    <div className="page-wrap px-4 pb-12 pt-4">
      <section className="grid gap-8 lg:grid-cols-[1fr_1fr] items-start mb-16">
        <article className="lg:row-span-2 relative">
          <div className="aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-lg bg-[var(--border-line)]">
            {lead.image ? (
              <img src={lead.image} alt={lead.imageAlt} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--gold)]/10 flex items-center justify-center">
                <span className="text-[var(--ink-soft)] text-sm font-body">{lead.imageAlt}</span>
              </div>
            )}
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">
              <span>{lead.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={lead.publishedAt}>{new Date(lead.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
            </div>
            <h1 className="font-playfair fs-display-lg text-[var(--ink)] leading-tight">
              <Link to={`/article/${lead.slug}`} className="no-underline">
                {lead.title}
              </Link>
            </h1>
            <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] max-w-xl">
              {lead.excerpt}
            </p>
            <div className="flex items-center gap-3">
              <Link
                to={`/authors/${lead.authorSlug}`}
                className="flex items-center gap-2 text-sm font-body text-[var(--ink)] hover:text-[var(--maroon)] transition-colors"
              >
                <Avatar name={lead.author} size="sm" />
                <span>{lead.author}</span>
              </Link>
              <span className="text-xs text-[var(--ink-soft)]">{lead.authorRole}</span>
            </div>
          </div>
        </article>

        <div className="space-y-6">
          {latest.slice(0, 2).map((item) => (
            <article key={item.slug} className="group">
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-[var(--border-line)] mb-3">
                {item.image ? (
                  <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--navy)]/10 via-[var(--ivory)] to-[var(--orange)]/10 flex items-center justify-center">
                    <span className="text-[var(--ink-soft)] text-sm font-body">Story image</span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={item.publishedAt}>{new Date(item.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                </div>
                <h2 className="font-playfair fs-display-sm text-[var(--ink)] leading-snug group-hover:text-[var(--maroon)] transition-colors">
                  <Link to={`/article/${item.slug}`} className="no-underline">
                    {item.title}
                  </Link>
                </h2>
                <div className="flex items-center gap-2 text-sm font-body text-[var(--ink-soft)]">
                  <Link to={`/authors/${item.authorSlug}`} className="hover:text-[var(--maroon)] transition-colors">{item.author}</Link>
                  <span aria-hidden="true">·</span>
                  <span>{item.authorRole}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <header className="flex items-baseline justify-between mb-8">
          <h2 className="font-playfair fs-display-md text-[var(--ink)]">Latest</h2>
          <Link
            to="/news"
            className="text-sm font-clash uppercase tracking-wider text-[var(--maroon)] hover:text-[var(--gold)] transition-colors no-underline"
          >
            View all →
          </Link>
        </header>
        <div className="space-y-6">
          {latest.map((item) => (
            <article key={item.slug} className="flex flex-col sm:flex-row gap-4 group py-4 border-t border-[var(--border-line)] first:border-0">
              <time className="text-xs font-clash uppercase tracking-wider text-[var(--maroon)] shrink-0 sm:w-28" dateTime={item.publishedAt}>
                {new Date(item.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </time>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <Link to={`/authors/${item.authorSlug}`} className="text-sm font-body text-[var(--ink-soft)] hover:text-[var(--maroon)] transition-colors">{item.author}</Link>
                  <span aria-hidden="true">·</span>
                  <span className="text-xs text-[var(--ink-soft)]">{item.authorRole}</span>
                </div>
                <Link to={`/article/${item.slug}`} className="font-playfair fs-body-large text-[var(--ink)] leading-snug group-hover:text-[var(--maroon)] transition-colors no-underline block">
                  {item.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <NewsletterBand />
    </div>
  )
}
