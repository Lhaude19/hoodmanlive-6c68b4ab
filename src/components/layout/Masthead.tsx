import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

export interface MastheadProps {
  className?: string
}

export function Masthead({ className }: MastheadProps) {
  return (
    <header className={cn('sticky top-0 z-50 border-b border-[var(--border-line)] bg-[var(--bg-masthead)]', className)}>
      <nav className="page-wrap flex flex-col items-start justify-between gap-3 py-3 sm:flex-row sm:items-center sm:gap-4 sm:py-4" aria-label="Main navigation">
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <h1 className="m-0 flex-shrink-0 text-xl font-clash font-semibold tracking-tight sm:text-2xl">
          <Link
            to="/"
            className="no-underline text-ivory hover:text-[var(--gold)] transition-colors"
            activeProps={{ className: 'no-underline text-ivory hover:text-[var(--gold)] transition-colors' }}
          >
            hoodmanlive
          </Link>
        </h1>

        <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-sm sm:text-base font-medium">
          <Link
            to="/news"
            className="nav-link text-ivory hover:text-[var(--gold)]"
            activeProps={{ className: 'nav-link is-active text-[var(--gold)]' }}
          >
            News
          </Link>
          <Link
            to="/programs"
            className="nav-link text-ivory hover:text-[var(--gold)]"
            activeProps={{ className: 'nav-link is-active text-[var(--gold)]' }}
          >
            Programs
          </Link>
          <Link
            to="/events"
            className="nav-link text-ivory hover:text-[var(--gold)]"
            activeProps={{ className: 'nav-link is-active text-[var(--gold)]' }}
          >
            Events
          </Link>
          <Link
            to="/about"
            className="nav-link text-ivory hover:text-[var(--gold)]"
            activeProps={{ className: 'nav-link is-active text-[var(--gold)]' }}
          >
            About
          </Link>
          <Link
            to="/subscribe"
            className="nav-link text-ivory hover:text-[var(--gold)]"
            activeProps={{ className: 'nav-link is-active text-[var(--gold)]' }}
          >
            Subscribe
          </Link>
        </div>
      </nav>
    </header>
  )
}

export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={cn('border-t-2 border-[var(--gold)] bg-[var(--bg-footer)] px-4', className)} role="contentinfo">
      <div className="page-wrap flex flex-col items-center justify-between gap-6 text-center py-10 sm:flex-row sm:text-left sm:py-14">
        <div className="flex flex-col gap-2">
          <p className="m-0 text-sm text-ivory56">
            &copy; {year} hoodmanlive. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" aria-label="Footer navigation">
          <Link
            to="/about"
            className="text-ivory72 hover:text-[var(--gold)] transition-colors no-underline"
          >
            About
          </Link>
          <Link
            to="/subscribe"
            className="text-ivory72 hover:text-[var(--gold)] transition-colors no-underline"
          >
            Newsletter
          </Link>
          <Link
            to="/news"
            className="text-ivory72 hover:text-[var(--gold)] transition-colors no-underline"
          >
            Archive
          </Link>
          <Link
            to="/privacy"
            className="text-ivory72 hover:text-[var(--gold)] transition-colors no-underline"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-ivory72 hover:text-[var(--gold)] transition-colors no-underline"
          >
            Terms
          </Link>
          <a
            href="mailto:editor@hoodmanlive.com"
            className="text-ivory72 hover:text-[var(--gold)] transition-colors no-underline"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://x.com/asapgray"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-ivory72 transition hover:bg-ivory12 hover:text-ivory"
            aria-label="Follow ASAP GRAY on X"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" width="20" height="20">
              <path
                fill="currentColor"
                d="M12.6 1h2.2L10 6.48 15.64 15h-4.41L7.78 9.82 3.23 15H1l5.14-5.84L.72 1h4.52l3.12 4.73L12.6 1zm-.77 12.67h1.22L4.57 2.26H3.26l8.57 11.41z"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/asapgray"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-ivory72 transition hover:bg-ivory12 hover:text-ivory"
            aria-label="Follow ASAP GRAY on Instagram"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" width="20" height="20">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.4c-3.53 0-6.4-2.87-6.4-6.4S4.47 1.6 8 1.6s6.4 2.87 6.4 6.4-2.87 6.4-6.4 6.4zm0-10.8c-2.43 0-4.4 1.97-4.4 4.4s1.97 4.4 4.4 4.4 4.4-1.97 4.4-4.4-1.97-4.4-4.4-4.4zm6.4 1.2c0 2.67-2.17 4.84-4.84 4.84C6.53 14 3 11.83 3 9.18c0-2.67 2.17-4.84 4.84-4.84.94 0 1.82.26 2.57.71.38-.24.8-.44 1.25-.61.19.24.37.5.55.78-.51.05-1.02.14-1.52.14-2.23 0-4.04-1.81-4.04-4.04 0-.81.31-1.56.82-2.12.72.83 2.01 1.51 3.44 1.62.02-.12.04-.24.04-.36 0-1.77-1.2-3.22-2.77-3.57 0-.5.13-.98.35-1.4-.24-.28-.53-.54-.84-.78 1.54-1.55 4.04-1.55 5.54 0 .41.08.81.17 1.2.26-.19.38-.4.55-.64.15.27.27.56.37.86.8-.62 1.55-1.36 2.14-2.21-.24.85-.37 1.72-.37 2.62 0 3.19 2.59 5.78 5.78 5.78z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}