import { createFileRoute } from '@tanstack/react-router'
import { dashboardRoute } from '../dashboard'

export const Route = createFileRoute('/dashboard/editions')({
  getParentRoute: () => dashboardRoute,
  component: EditionsPage,
})

function EditionsPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="font-playfair text-3xl font-semibold text-[var(--ink)]">Editions</h1>
        <p className="text-[var(--ink-soft)] mt-1">Manage weekly editions and scheduling.</p>
      </header>
      <div className="bg-[var(--bg-page)] rounded-xl p-8 shadow-sm border border-[var(--border-line)] text-center">
        <p className="text-[var(--ink-soft)]">No editions scheduled.</p>
      </div>
    </div>
  )
}
