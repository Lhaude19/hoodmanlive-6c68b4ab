import { createFileRoute } from '@tanstack/react-router'
import { dashboardRoute } from '../dashboard'

export const Route = createFileRoute('/dashboard/team')({
  getParentRoute: () => dashboardRoute,
  component: TeamPage,
})

function TeamPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="font-playfair text-3xl font-semibold text-[var(--ink)]">Team</h1>
        <p className="text-[var(--ink-soft)] mt-1">Manage editorial team and contributors.</p>
      </header>
      <div className="bg-[var(--bg-page)] rounded-xl p-8 shadow-sm border border-[var(--border-line)] text-center">
        <p className="text-[var(--ink-soft)]">No team members yet.</p>
      </div>
    </div>
  )
}
