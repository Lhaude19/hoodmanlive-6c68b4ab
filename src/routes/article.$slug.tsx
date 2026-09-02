import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Avatar } from '#/components/ui/Avatar'
import { formatDate } from '#/lib/utils'
import { NewsletterBand } from '#/components/layout/NewsletterBand'
import { getArticle, getRelated } from '#/lib/content'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/article/$slug')({
  component: ArticlePage,
})

function ArticlePage() {
  const route = Route.useParams()
  const article = getArticle(route.slug)

  if (!article) {
    return (
      <div className="page-wrap px-4 py-12">
        <h1 className="font-playfair fs-display-lg text-[var(--ink)]">Article not found</h1>
        <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] mt-4">The article you're looking for doesn't exist.</p>
        <Link to="/news" className="text-[var(--maroon)] hover:text-[var(--gold)] underline mt-4 inline-block">← Back to News</Link>
      </div>
    )
  }

  const [shareUrl, setShareUrl] = useState('#')
  const related = getRelated(article)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href)
    }
  }, [])

  return (
    <>
      <div>
        <div className="page-wrap px-4 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 font-clash text-xs uppercase tracking-wider text-[var(--orange)] mb-5">
              <span>{article.category}</span>
              <span className="w-1 h-1 rounded-full bg-[var(--border-line)]" aria-hidden="true" />
              <span>{article.readTime} read</span>
            </div>
            <h1 className="font-playfair fs-display-lg text-[var(--ink)] leading-tight mb-5">{article.title}</h1>
            <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] mb-6">{article.excerpt}</p>

            <div className="flex items-center gap-3 text-sm text-[var(--ink-soft)] border-t border-b border-[var(--border-line)] py-4 mb-8">
              <Avatar name={article.author} size="md" />
              <div>
                <Link to={`/authors/${article.authorSlug}`} className="font-clash font-semibold text-[var(--ink)] hover:text-[var(--maroon)] transition-colors">
                  {article.author}
                </Link>
                <div className="text-[var(--ink-soft)]">Published {formatDate(article.publishedAt)}</div>
              </div>
            </div>

            <figure className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--navy)]/10 relative mb-10">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute left-4 bottom-3 text-ivory72 font-clash text-xs letter-spacing-wide">
                PHOTOGRAPHY — {article.imageAlt}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="page-wrap px-4 pb-16">
          <div className="max-w-2xl mx-auto space-y-8">
            {article.body.map((paragraph, i) => {
              const isLeadPara = i === 0
              const isPullQuote = paragraph.startsWith('"') && paragraph.endsWith('"')
              const isSectionLabel = paragraph.startsWith('##')

              if (isSectionLabel) {
                return (
                  <h2 key={i} className="font-clash text-xs uppercase tracking-wider text-[var(--orange)] mt-10 mb-3">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                )
              }

              if (isPullQuote) {
                return (
                  <blockquote key={i} className="font-playfair italic font-semibold text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-snug text-[var(--maroon)] border-l-4 border-[var(--gold)] pl-5 my-10">
                    {paragraph}
                  </blockquote>
                )
              }

              if (isLeadPara) {
                return (
                  <p key={i} className="font-body text-lg leading-[1.75] text-[var(--ink)] relative">
                    <span className="font-playfair font-bold float-left text-6xl leading-[0.8] pr-3 text-[var(--maroon)]">
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </p>
                )
              }

              return (
                <p key={i} className="font-body text-lg leading-[1.75] text-[var(--ink)]">
                  {paragraph}
                </p>
              )
            })}

            <figure className="aspect-[3/2] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--navy)]/10 via-[var(--ivory)] to-[var(--maroon)]/10 relative my-10">
              {article.inlineImage ? (
                <img src={article.inlineImage} alt={article.inlineImageAlt} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[var(--ink-soft)] text-sm font-body">Inline photograph</span>
                </div>
              )}
              <figcaption className="absolute left-4 bottom-3 text-ivory72 font-clash text-xs letter-spacing-wide">
                PHOTOGRAPHY — {article.inlineImageAlt || 'ASAP GRAY / credit slot'}
              </figcaption>
            </figure>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[var(--border-line)] font-clash text-sm text-[var(--ink-soft)]">
              <span>Share:</span>
              <button
                onClick={() => navigator.clipboard?.writeText(shareUrl)}
                className="border-b-2 border-[var(--gold)] hover:text-[var(--orange)] transition-colors bg-transparent cursor-pointer"
              >
                Copy link
              </button>
              <a
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-[var(--gold)] hover:text-[var(--orange)] transition-colors no-underline"
              >
                X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-[var(--gold)] hover:text-[var(--orange)] transition-colors no-underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="page-wrap px-4 py-10 border-t border-[var(--border-line)]" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-playfair fs-display-md text-[var(--ink)] mb-8">Related reporting</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <article key={rel.slug} className="relative bg-[var(--ivory)] rounded-lg overflow-hidden group" tabIndex={0}>
                  <div className="h-[3px] bg-[var(--gold)]" aria-hidden="true" />
                  <div className="p-5 space-y-3 pt-4">
                    <span className="font-clash text-xs uppercase tracking-wider text-[var(--orange)]">{rel.category}</span>
                    <Link to={`/article/${rel.slug}`} className="block">
                      <h3 className="font-playfair text-xl font-bold leading-snug text-[var(--ink)] group-hover:text-[var(--maroon)] transition-colors mb-2">
                        {rel.title}
                      </h3>
                    </Link>
                    <time dateTime={rel.publishedAt} className="text-sm text-[var(--ink-soft)]">
                      {formatDate(rel.publishedAt)}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <NewsletterBand />
      </div>
    </>
  )
}