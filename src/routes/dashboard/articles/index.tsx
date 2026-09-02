import { createFileRoute, Link } from '@tanstack/react-router'
import { dashboardRoute } from '../../dashboard'

export const Route = createFileRoute('/dashboard/articles/')({
  getParentRoute: () => dashboardRoute,
  component: ArticlesPage,
})

interface Article {
  slug: string
  title: string
  author: string
  status: 'draft' | 'published' | 'scheduled'
  scheduledPublish: string | null
  category: string
}

const mockArticles: Article[] = [
  { slug: 'accra-silent-logistics-gap', title: "Accra's silent logistics gap", author: 'Ama Serwaa', status: 'published', scheduledPublish: '2026-08-24', category: 'Investigation' },
  { slug: 'ssa-music-120m', title: 'SSA music revenue hits $120M', author: 'Zara Mwangi', status: 'published', scheduledPublish: '2026-08-23', category: 'Investigation' },
  { slug: 'africa-fintech-640m', title: 'Africa fintech raises $640M', author: 'Ama Serwaa', status: 'draft', scheduledPublish: null, category: 'Investigation' },
  { slug: 'climate-adaptive-cohort', title: 'Climate-adaptive agriculture cohort', author: 'Zara Mwangi', status: 'scheduled', scheduledPublish: '2026-09-01', category: 'Programs' },
]

function ArticlesPage() {
  const changeStatus = (slug: string, status: 'draft' | 'published' | 'scheduled') => {
    // Stub action — real implementation would update content/data
    const a = mockArticles.find(x => x.slug === slug)
    if (a) a.status = status
  }

  return (
    <div>
      <header className="mb-8">
        <h1 className="font-playfair text-3xl font-semibold text-[var(--ink)]">Articles</h1>
        <p className="text-[var(--ink-soft)] mt-1">Manage articles, drafts, and scheduled posts.</p>
      </header>

      <div className="bg-[var(--bg-page)] rounded-xl shadow-sm border border-[var(--border-line)] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[var(--bg-muted)]">
            <tr>
              <th className="px-6 py-3 text-xs font-clash uppercase tracking-wider text-[var(--ink-soft)]">Title</th>
              <th className="px-6 py-3 text-xs font-clash uppercase tracking-wider text-[var(--ink-soft)]">Category</th>
              <th className="px-6 py-3 text-xs font-clash uppercase tracking-wider text-[var(--ink-soft)]">Status</th>
              <th className="px-6 py-3 text-xs font-clash uppercase tracking-wider text-[var(--ink-soft)]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockArticles.map((a) => (
              <tr key={a.slug} className="border-t border-[var(--border-line)]">
                <td className="px-6 py-4 text-sm font-medium">
                  <Link to={`/dashboard/articles/${a.slug}`} className="text-[var(--ink)] hover:text-[var(--maroon)] transition-colors">
                    {a.title}
                  </Link>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--ink-soft)]">{a.category}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                    a.status === 'published'
                      ? 'bg-[var(--success)]/10 text-[var(--success)]'
                      : a.status === 'scheduled'
                      ? 'bg-[var(--warning)]/10 text-[var(--warning)]'
                      : 'bg-[var(--ink-soft)]/10 text-[var(--ink-soft)]'
                  }`}>
                    {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => changeStatus(a.slug, a.status === 'published' ? 'draft' : 'published')}
                      className={`text-xs font-clash px-3 py-1 rounded-lg transition-colors ${
                        a.status === 'published'
                          ? 'bg-[var(--bg-muted)] text-[var(--ink-soft)] hover:bg-[var(--maroon)]/10 hover:text-[var(--maroon)]'
                          : 'bg-[var(--maroon)] text-[var(--ivory)] hover:bg-[var(--orange)]'
                      }`}
                    >
                      {a.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <button
                      onClick={() => changeStatus(a.slug, 'scheduled')}
                      className="text-xs font-clash px-3 py-1 rounded-lg bg-[var(--navy)] text-[var(--ivory)] hover:bg-[var(--ink)]/20 transition-colors"
                    >
                      Schedule
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
