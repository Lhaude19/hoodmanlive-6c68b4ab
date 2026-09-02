import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { dashboardRoute } from '../../dashboard'
import { useState, useCallback } from 'react'

export const Route = createFileRoute('/dashboard/articles/$articleId')({
  getParentRoute: () => dashboardRoute,
  component: ArticleEditor,
})

interface ArticleForm {
  title: string
  excerpt: string
  category: string
  slug: string
  status: 'draft' | 'published' | 'scheduled'
  publishDate: string
  heroImage: string
  heroImageAlt: string
  inlineImages: Array<{ src: string; alt: string }>
  body: string[]
}

function ArticleEditor() {
  const { articleId } = Route.useParams()
  const navigate = useNavigate()
  const isNew = articleId === 'new'

  const [form, setForm] = useState<ArticleForm>({
    title: isNew ? '' : articleId,
    excerpt: '',
    category: '',
    slug: isNew ? '' : articleId,
    status: 'draft',
    publishDate: '',
    heroImage: '',
    heroImageAlt: '',
    inlineImages: [],
    body: [''],
  })

  const updateField = (field: keyof ArticleForm, value: unknown) => {
    setForm({ ...form, [field]: value })
  }

  const handleSave = () => {
    console.log('Saving article:', form)
    alert(`Draft saved: "${form.title}"`)
  }

  const handlePublish = () => {
    if (form.status === 'published') {
      updateField('status', 'draft')
      alert(`Unpublished: "${form.title}"`)
    } else {
      updateField('status', 'published')
      updateField('publishDate', new Date().toISOString().split('T')[0])
      alert(`Published: "${form.title}"`)
    }
  }

  const handleSchedule = () => {
    updateField('status', 'scheduled')
    if (!form.publishDate) {
      updateField('publishDate', new Date().toISOString().split('T')[0])
    }
    alert(`Scheduled: "${form.title}" for ${form.publishDate}`)
  }

  const addParagraph = () => {
    updateField('body', [...form.body, ''])
  }

  const updateParagraph = (index: number, value: string) => {
    const newBody = [...form.body]
    newBody[index] = value
    updateField('body', newBody)
  }

  const removeParagraph = (index: number) => {
    if (form.body.length > 1) {
      updateField('body', form.body.filter((_, i) => i !== index))
    }
  }

  const addInlineImage = () => {
    updateField('inlineImages', [...form.inlineImages, { src: '', alt: '' }])
  }

  const updateInlineImage = (index: number, field: 'src' | 'alt', value: string) => {
    const newImages = [...form.inlineImages]
    newImages[index][field] = value
    updateField('inlineImages', newImages)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <Link
          to="/dashboard/articles"
          className="text-sm font-clash uppercase tracking-wider text-[var(--ink-soft)] hover:text-[var(--maroon)] transition-colors mb-4 inline-block"
        >
          ← Back to Articles
        </Link>
        <h1 className="font-playfair text-3xl font-semibold text-[var(--ink)] mt-2">
          {isNew ? 'New Article' : `Editing: ${articleId}`}
        </h1>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border-line)]">
        <div className="flex items-center gap-4">
          <select
            value={form.status}
            onChange={(e) => updateField('status', e.target.value)}
            className="px-3 py-2 rounded-lg border border-[var(--border-line)] bg-[var(--bg-page)] text-[var(--ink)] text-sm font-clash"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
          </select>

          {form.status === 'scheduled' && (
            <input
              type="date"
              value={form.publishDate}
              onChange={(e) => updateField('publishDate', e.target.value)}
              className="px-3 py-2 rounded-lg border border-[var(--border-line)] bg-[var(--bg-page)] text-[var(--ink)] text-sm font-clash"
            />
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-clash font-medium text-[var(--navy)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg hover:bg-[var(--bg-muted)] transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={handleSchedule}
            className="px-4 py-2 text-sm font-clash font-medium text-[var(--ivory)] bg-[var(--navy)] rounded-lg hover:bg-[var(--ink)]/80 transition-colors"
          >
            Schedule
          </button>
          <button
            onClick={handlePublish}
            className={`px-4 py-2 text-sm font-clash font-semibold rounded-lg transition-colors ${
              form.status === 'published'
                ? 'bg-[var(--warning)] text-[var(--navy)] hover:bg-[var(--orange)]'
                : 'bg-[var(--maroon)] text-[var(--ivory)] hover:bg-[var(--orange)]'
            }`}
          >
            {form.status === 'published' ? 'Unpublish' : 'Publish'}
          </button>
        </div>
      </div>

      {/* Two-column editor layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main editor — 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <label className="block text-sm font-clash uppercase tracking-wider text-[var(--ink-soft)] mb-1">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => updateField('title', e.target.value)}
              placeholder="Enter article title"
              className="w-full px-4 py-3 text-2xl text-[var(--ink)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-playfair"
            />
          </div>

          <div>
            <label className="block text-sm font-clash uppercase tracking-wider text-[var(--ink-soft)] mb-1">
              Slug
            </label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => updateField('slug', e.target.value)}
              placeholder="article-slug-url"
              className="w-full px-4 py-2 text-sm text-[var(--ink)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-clash"
            />
          </div>

          <div>
            <label className="block text-sm font-clash uppercase tracking-wider text-[var(--ink-soft)] mb-1">
              Excerpt
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) => updateField('excerpt', e.target.value)}
              placeholder="Short summary that appears in article listings"
              rows={3}
              className="w-full px-4 py-3 text-sm text-[var(--ink)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-body"
            />
          </div>

          <div>
            <label className="block text-sm font-clash uppercase tracking-wider text-[var(--ink-soft)] mb-1">
              Category
            </label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => updateField('category', e.target.value)}
              placeholder="e.g. Investigation, Desk note, Programs"
              className="w-full px-4 py-2 text-sm text-[var(--ink)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-clash uppercase"
            />
          </div>

          <div>
            <label className="block text-sm font-clash uppercase tracking-wider text-[var(--ink-soft)] mb-1">
              Body
            </label>
            <div className="space-y-4">
              {form.body.map((para, i) => (
                <div key={i} className="relative">
                  <textarea
                    value={para}
                    onChange={(e) => updateParagraph(i, e.target.value)}
                    placeholder={`Paragraph ${i + 1}${i === 0 ? ' (lead paragraph)' : ''}`}
                    rows={Math.max(4, Math.ceil(para.length / 80))}
                    className="w-full px-4 py-3 text-lg text-[var(--ink)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-body leading-[1.75] resize-y min-h-[120px]"
                  />
                  {i === 0 && (
                    <span className="absolute top-2 right-2 text-xs font-clash uppercase tracking-wider text-[var(--ink-soft)] bg-[var(--bg-page)] px-2 py-0.5 rounded">
                      Lead
                    </span>
                  )}
                  {form.body.length > 1 && (
                    <button
                      onClick={() => removeParagraph(i)}
                      className="absolute bottom-2 right-2 text-xs text-[var(--ink-soft)] hover:text-[var(--orange)] font-clash"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={addParagraph}
              className="mt-3 text-sm font-clash uppercase tracking-wider text-[var(--ink-soft)] hover:text-[var(--maroon)] transition-colors"
            >
              + Add paragraph
            </button>
          </div>
        </div>

        {/* Media panel — 1 column */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-clash uppercase tracking-wider text-[var(--ink-soft)] mb-2">
              Hero Image
            </label>
            {form.heroImage ? (
              <div className="aspect-[3/2] rounded-lg overflow-hidden bg-[var(--border-line)] mb-2">
                <img src={form.heroImage} alt={form.heroImageAlt} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="aspect-[3/2] rounded-lg bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--navy)]/10 flex items-center justify-center mb-2">
                <span className="text-[var(--ink-soft)] font-body text-sm">No hero image</span>
              </div>
            )}
            <input
              type="text"
              value={form.heroImage}
              onChange={(e) => updateField('heroImage', e.target.value)}
              placeholder="/articles/example.png"
              className="w-full px-3 py-2 text-xs text-[var(--ink)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-clash"
            />
            <input
              type="text"
              value={form.heroImageAlt}
              onChange={(e) => updateField('heroImageAlt', e.target.value)}
              placeholder="Alt text / photography credit"
              className="w-full px-3 py-2 text-xs text-[var(--ink)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-clash mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-clash uppercase tracking-wider text-[var(--ink-soft)] mb-2">
              Inline Images
            </label>
            {form.inlineImages.map((img, i) => (
              <div key={i} className="mb-4">
                <input
                  type="text"
                  value={img.src}
                  onChange={(e) => updateInlineImage(i, 'src', e.target.value)}
                  placeholder="Image path"
                  className="w-full px-3 py-2 text-xs text-[var(--ink)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-clash mb-1"
                />
                <input
                  type="text"
                  value={img.alt}
                  onChange={(e) => updateInlineImage(i, 'alt', e.target.value)}
                  placeholder="Alt text"
                  className="w-full px-3 py-2 text-xs text-[var(--ink)] bg-[var(--ivory)] border border-[var(--border-line)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-clash"
                />
              </div>
            ))}
            <button
              onClick={addInlineImage}
              className="text-xs font-clash uppercase tracking-wider text-[var(--ink-soft)] hover:text-[var(--maroon)] transition-colors"
            >
              + Add inline image
            </button>
            <p className="text-[10px] text-[var(--ink-soft)] font-body mt-1">
              Image paths from src/assets/articles/ — upload UI coming with @creative
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
