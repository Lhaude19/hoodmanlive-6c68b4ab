import { createFileRoute } from '@tanstack/react-router'
import { dashboardRoute } from '../dashboard'

export const Route = createFileRoute('/dashboard/')({
  getParentRoute: () => dashboardRoute,
  component: OverviewPage,
})

function OverviewPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="font-playfair text-3xl font-semibold text-[var(--ink)]">Overview</h1>
        <p className="text-[var(--ink-soft)] mt-1">Welcome to the hoodmanlive editorial dashboard.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Published Articles" value="12" />
        <StatCard label="Drafts" value="3" />
        <StatCard label="Team Members" value="4" />
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--bg-page)] rounded-xl p-6 shadow-sm border border-[var(--border-line)]">
      <p className="text-sm text-[var(--ink-soft)]">{label}</p>
      <p className="font-clash text-3xl font-semibold text-[var(--ink)] mt-1">{value}</p>
    </div>
  )
}
