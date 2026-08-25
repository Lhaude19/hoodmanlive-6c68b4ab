import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Chip } from '@/components/ui/Chip'
import { Card, CardContent } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { formatDate } from '@/lib/utils'
import { NewsletterBand } from '@/components/layout/NewsletterBand'
import { articles, getArticle } from '@/lib/content'
import { useState } from 'react'

export const Route = createFileRoute('/news')({ component: NewsPage })

// Map content categories to filter ids (lowercased, slug-safe)
const CATEGORY_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'investigation', label: 'Investigation' },
  { id: 'community', label: 'Eyes on the community' },
  { id: 'programs', label: 'Programs' },
  { id: 'desk-note', label: 'Desk note' },
]

function categoryToId(category: string): string {
  return category.toLowerCase().replace(/[^a-z]+/g, '-').replace(/(^-|-$)/g, '')
}

function NewsPage() {
  const [active, setActive] = useState<string>('all')

  const featured = getArticle('accra-silent-logistics-gap')!

  const all = articles
    .filter((a) => a.slug !== featured.slug)
    .map((a) => ({
      title: a.title,
      category: a.category,
      categoryId: categoryToId(a.category),
      slug: a.slug,
      excerpt: a.excerpt,
      author: a.author,
      authorRole: a.authorRole ?? '',
      authorSlug: a.authorSlug,
      publishedAt: a.publishedAt,
      imageAlt: a.imageAlt,
    }))

  const list = active === 'all' ? all : all.filter((a) => a.categoryId === active)

  return (
    <>
      <div className="page-wrap px-4 py-12 sm:py-16">
        <header className="mb-10">
          <h1 className="font-playfair fs-display-lg text-[var(--ink)] mb-3">News</h1>
          <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] max-w-2xl">
            Reporting, investigations, and desk notes. Independent editorial, held to an expert-journalist standard.
          </p>
        </header>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 border-b border-[var(--border-line)] pb-6" role="group" aria-label="Filter by section">
          {CATEGORY_FILTERS.map((cat) => (
            <Chip
              key={cat.id}
              pressed={active === cat.id}
              onClick={() => setActive(cat.id)}
              className="min-w-0 cursor-pointer"
            >
              {cat.label}
            </Chip>
          ))}
        </div>

        <article className="grid lg:grid-cols-12 gap-8 mb-10 pb-10 border-b border-[var(--border-line)]">
          <div className="lg:col-span-7 aspect-[16/9] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--navy)]/10 relative">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[var(--ink-soft)] text-sm font-body">{featured.imageAlt}</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-clash text-xs uppercase tracking-wider text-[var(--orange)] mb-3">{featured.category}</span>
            <Link to={`/article/${featured.slug}`} className="font-playfair fs-display-md text-[var(--ink)] leading-snug hover:text-[var(--maroon)] transition-colors no-underline mb-4">
              {featured.title}
            </Link>
            <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] mb-4">{featured.excerpt}</p>
            <div className="flex items-center gap-2 text-sm font-body text-[var(--ink-soft)]">
              <Avatar name={featured.author} size="sm" />
              <Link to={`/authors/${featured.authorSlug}`} className="hover:text-[var(--maroon)] transition-colors font-medium">
                {featured.author}
              </Link>
              <span aria-hidden="true">·</span>
              <span>{featured.authorRole}</span>
              <span aria-hidden="true">·</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </article>

        {list.length === 0 ? (
          <p className="font-body text-[var(--ink-soft)] py-8">No stories in this section yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((article) => (
              <article key={article.slug} className="relative bg-[var(--ivory)] rounded-lg overflow-hidden group" tabIndex={0}>
                <div className="h-[3px] bg-[var(--gold)]" aria-hidden="true" />
                <CardContent className="p-5 space-y-3 pt-4">
                  <span className="font-clash text-xs uppercase tracking-wider text-[var(--orange)]">{article.category}</span>
                  <Link to={`/article/${article.slug}`} className="block">
                    <h2 className="font-playfair text-xl font-bold leading-snug text-[var(--ink)] group-hover:text-[var(--maroon)] transition-colors mb-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="font-body text-sm text-[var(--ink-soft)] mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm font-body text-[var(--ink-soft)]">
                    <Avatar name={article.author} size="sm" />
                    <Link to={`/authors/${article.authorSlug}`} className="hover:text-[var(--maroon)] transition-colors font-medium">
                      {article.author}
                    </Link>
                    <span aria-hidden="true">·</span>
                    <span>{article.authorRole}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                  </div>
                </CardContent>
              </article>
            ))}
          </div>
        )}
      </div>
      <NewsletterBand />
    </>
  )
}
