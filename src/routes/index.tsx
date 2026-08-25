import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="page-wrap px-4 pb-12 pt-4">
      {/* Skip link target is the main element */}

      {/* ASYMMETRIC 1-LEAD + STACKED HERO */}
      <section className="grid gap-8 lg:grid-cols-[1fr_1fr] items-start mb-16">
        {/* Lead article — spans 2 rows on mobile, left column on desktop */}
        <article className="lg:row-span-2 relative">
          <div className="aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-lg bg-[var(--border-line)]">
            {/* Placeholder image — Q4: generated on-brand placeholders for v1 */}
            <div className="w-full h-full bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--gold)]/10 flex items-center justify-center">
              <span className="text-[var(--ink-soft)] text-sm font-body">Lead article image</span>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">
              <span>Politics</span>
              <span aria-hidden="true">·</span>
              <time dateTime="2026-08-20">20 Aug 2026</time>
            </div>
            <h1 className="font-playfair fs-display-lg text-[var(--ink)] leading-tight">
              Ghana&apos;s new industrial policy shifts from extraction to value addition
            </h1>
            <p className="font-gambetta fs-standfirst text-[var(--ink-soft)] max-w-xl">
              The strategy aims to keep more mineral wealth in-country — but execution depends on power, ports, and political will.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/authors/kofi-mensah"
                className="flex items-center gap-2 text-sm font-body text-[var(--ink)] hover:text-[var(--maroon)] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--border-line)] flex items-center justify-center">
                  <span className="text-xs font-clash text-[var(--maroon)]">KM</span>
                </div>
                <span>Kofi Mensah</span>
              </Link>
              <span className="text-xs text-[var(--ink-soft)]">Senior Correspondent</span>
            </div>
          </div>
        </article>

        {/* Stacked secondary stories — right column */}
        <div className="space-y-6">
          {/* Story 2 */}
          <article className="group">
            <div className="aspect-[16/9] overflow-hidden rounded-lg bg-[var(--border-line)] mb-3">
              <div className="w-full h-full bg-gradient-to-br from-[var(--navy)]/10 via-[var(--ivory)] to-[var(--orange)]/10 flex items-center justify-center">
                <span className="text-[var(--ink-soft)] text-sm font-body">Story image</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">
                <span>Economy</span>
                <span aria-hidden="true">·</span>
                <time dateTime="2026-08-19">19 Aug 2026</time>
              </div>
              <h2 className="font-playfair fs-display-sm text-[var(--ink)] leading-snug group-hover:text-[var(--maroon)] transition-colors">
                AfCFTA secretariat reports 18% intra-Africa trade growth in H1 2026
              </h2>
              <div className="flex items-center gap-2 text-sm font-body text-[var(--ink-soft)]">
                <Link to="/authors/ama-osei" className="hover:text-[var(--maroon)] transition-colors">Ama Osei</Link>
                <span aria-hidden="true">·</span>
                <span>Business Editor</span>
              </div>
            </div>
          </article>

          {/* Story 3 */}
          <article className="group">
            <div className="aspect-[16/9] overflow-hidden rounded-lg bg-[var(--border-line)] mb-3">
              <div className="w-full h-full bg-gradient-to-br from-[var(--gold)]/10 via-[var(--ivory)] to-[var(--navy)]/10 flex items-center justify-center">
                <span className="text-[var(--ink-soft)] text-sm font-body">Story image</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">
                <span>Culture</span>
                <span aria-hidden="true">·</span>
                <time dateTime="2026-08-18">18 Aug 2026</time>
              </div>
              <h2 className="font-playfair fs-display-sm text-[var(--ink)] leading-snug group-hover:text-[var(--maroon)] transition-colors">
                Accra&apos;s new photography biennale centers West African gaze
              </h2>
              <div className="flex items-center gap-2 text-sm font-body text-[var(--ink-soft)]">
                <Link to="/authors/kwame-tetteh" className="hover:text-[var(--maroon)] transition-colors">Kwame Tetteh</Link>
                <span aria-hidden="true">·</span>
                <span>Arts Correspondent</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* LATEST FEED — serif-headline rows */}
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
          {[
            { category: 'Technology', date: '2026-08-20', title: 'AI research hub launches in Kumasi with $12M seed funding', author: 'Esi Asante', role: 'Tech Reporter', slug: 'ai-research-hub-kumasi' },
            { category: 'Health', date: '2026-08-19', title: 'Ghana Health Service rolls out digital patient records nationwide', author: 'Yaw Boateng', role: 'Health Correspondent', slug: 'digital-patient-records' },
            { category: 'Environment', date: '2026-08-17', title: 'Volta Basin restoration project secures World Bank backing', author: 'Adwoa Mensah', role: 'Environment Editor', slug: 'volta-basin-restoration' },
            { category: 'Politics', date: '2026-08-16', title: 'Parliament passes local governance amendment bill', author: 'Kofi Mensah', role: 'Senior Correspondent', slug: 'local-governance-amendment' },
          ].map((item, i) => (
            <article key={item.slug} className="flex flex-col sm:flex-row gap-4 group py-4 border-t border-[var(--border-line)] first:border-0">
              <time className="text-xs font-clash uppercase tracking-wider text-[var(--maroon)] shrink-0 sm:w-28" dateTime={item.date}>
                {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </time>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <Link to={`/authors/${item.author.toLowerCase().replace(' ', '-')}`} className="text-sm font-body text-[var(--ink-soft)] hover:text-[var(--maroon)] transition-colors">{item.author}</Link>
                  <span aria-hidden="true">·</span>
                  <span className="text-xs text-[var(--ink-soft)]">{item.role}</span>
                </div>
                <Link to={`/article/${item.slug}`} className="font-playfair fs-body-large text-[var(--ink)] leading-snug group-hover:text-[var(--maroon)] transition-colors no-underline block">
                  {item.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROGRAMS & EVENTS BAND — maroon background, gold top-rule cards */}
      <section className="bg-[var(--maroon)] relative overflow-hidden mb-16" aria-labelledby="programs-events-heading">
        {/* Gold top rule */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--gold)]" aria-hidden="true" />
        <div className="page-wrap px-4 py-12 sm:py-16 relative z-10">
          <header className="mb-10">
            <h2 id="programs-events-heading" className="font-playfair fs-display-md text-ivory mb-2">Programs & Events</h2>
            <p className="font-gambetta fs-standfirst text-ivory72 max-w-2xl">Editorial initiatives and convenings. Reports live on as full articles after the event.</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 — Founder Field Notes */}
            <article className="relative bg-[var(--ivory)] rounded-lg overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[var(--gold)] group">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--maroon)]/10 via-[var(--ivory)] to-[var(--gold)]/10 flex items-center justify-center">
                <span className="text-[var(--ink-soft)] text-sm font-body">Program image</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">
                  <span>Program</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime="2026-09">Sep 2026 – Jun 2027</time>
                </div>
                <h3 className="font-playfair fs-display-sm text-[var(--ink)] leading-snug group-hover:text-[var(--maroon)] transition-colors">
                  Founder Field Notes
                </h3>
                <p className="font-gambetta fs-standfirst text-[var(--ink-soft)]">
                  Monthly closed-door conversations with builders shaping Africa&apos;s next decade.
                </p>
                <Link
                  to="/programs/founder-field-notes"
                  className="inline-flex items-center gap-1 text-sm font-clash font-medium text-[var(--maroon)] hover:text-[var(--gold)] transition-colors no-underline"
                >
                  View program <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* Card 2 — ADeCa Ball */}
            <article className="relative bg-[var(--ivory)] rounded-lg overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[var(--gold)] group">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--gold)]/10 via-[var(--ivory)] to-[var(--maroon)]/10 flex items-center justify-center">
                <span className="text-[var(--ink-soft)] text-sm font-body">Event image</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">
                  <span>Event</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime="2026-09-04">4 Sep 2026</time>
                </div>
                <h3 className="font-playfair fs-display-sm text-[var(--ink)] leading-snug group-hover:text-[var(--maroon)] transition-colors">
                  Africa Development Catalyst Ball 2026
                </h3>
                <p className="font-gambetta fs-standfirst text-[var(--ink-soft)]">
                  Invite-only convening in Accra. 29 categories. Public voting. SIT identity verification.
                </p>
                <Link
                  to="/events/africa-development-catalyst-ball-2026"
                  className="inline-flex items-center gap-1 text-sm font-clash font-medium text-[var(--maroon)] hover:text-[var(--gold)] transition-colors no-underline"
                >
                  Event details <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* Card 3 — Post-Event Reporting */}
            <article className="relative bg-[var(--ivory)] rounded-lg overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[var(--gold)] group">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--navy)]/10 via-[var(--ivory)] to-[var(--orange)]/10 flex items-center justify-center">
                <span className="text-[var(--ink-soft)] text-sm font-body">Report image</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-clash uppercase tracking-wider text-[var(--maroon)]">
                  <span>Program</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime="2026-10">Post-event series</time>
                </div>
                <h3 className="font-playfair fs-display-sm text-[var(--ink)] leading-snug group-hover:text-[var(--maroon)] transition-colors">
                  Post-Event Reporting
                </h3>
                <p className="font-gambetta fs-standfirst text-[var(--ink-soft)]">
                  Full articles published after each convening — evidence, outcomes, next steps.
                </p>
                <Link
                  to="/programs/post-event-reporting"
                  className="inline-flex items-center gap-1 text-sm font-clash font-medium text-[var(--maroon)] hover:text-[var(--gold)] transition-colors no-underline"
                >
                  Read reports <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NEWSLETTER — navy band with working subscribe states */}
      <section className="bg-[var(--navy)] relative mb-16" aria-labelledby="newsletter-heading">
        <div className="page-wrap px-4 py-12 sm:py-16 relative">
          <header className="max-w-2xl mb-8">
            <h2 id="newsletter-heading" className="font-playfair fs-display-md text-ivory mb-3">The Dispatch</h2>
            <p className="font-gambetta fs-standfirst text-ivory72">
              A weekly editorial digest — no marketing, just the stories that matter. Sent every Friday.
            </p>
          </header>
          <form className="max-w-md" action="#" method="POST">
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-[var(--ivory)] text-[var(--ink)] placeholder-[var(--ink-soft)] border border-[var(--border-line)] focus:outline-none focus:ring-3 focus:ring-[var(--gold)] font-body"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[var(--gold)] text-[var(--navy)] font-clash font-semibold text-sm uppercase tracking-wider hover:bg-[color-mix(in_oklab,var(--gold)_85%,white)] focus:outline-none focus:ring-3 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)] transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-ivory56 text-center">
              By subscribing you agree to our privacy policy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}