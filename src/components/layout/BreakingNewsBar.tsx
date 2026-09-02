import { Link } from '@tanstack/react-router'

interface BreakingNewsBarProps {
  items: Array<{
    label: string
    href: string
  }>
  className?: string
}

export function BreakingNewsBar({ items, className }: BreakingNewsBarProps) {
  if (!items || items.length === 0) return null

  const marqueeText = items.map((item) => `[${item.label}]`).join('  •  ')

  return (
    <div
      className={`hidden sm:block bg-[var(--maroon)] text-[var(--gold)] overflow-hidden whitespace-nowrap ${className || ''}`}
      aria-live="polite"
      aria-label="Breaking news"
    >
      <div className="page-wrap py-2">
        <span className="font-clash text-xs font-semibold uppercase tracking-wider">
          Breaking News
        </span>
        <span className="font-body text-sm mx-3">
          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="currentColor"
            className="inline-block mx-2"
          >
            <circle cx="2" cy="2" r="2" />
          </svg>
          <span className="inline-block animate-marquee">
            {items.map((item, i) => (
              <span key={item.href}>
                <Link
                  to={item.href}
                  className="text-[var(--gold)] hover:text-[var(--ivory)] transition-colors"
                >
                  {item.label}
                </Link>
                {i < items.length - 1 && (
                  <span className="mx-2 text-[var(--ivory)]/30">•</span>
                )}
              </span>
            ))}
          </span>
        </span>
      </div>
    </div>
  )
}
