import { createFileRoute, Outlet, Link } from '@tanstack/react-router'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { useAuth } from '../lib/auth'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

export const dashboardRoute = Route

function DashboardLayout() {
  const { user, signIn, signOut, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError('')
    try {
      await signIn(email, password)
      window.location.reload()
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Sign in failed')
    }
  }

  const handleSignOut = async () => {
    await signOut()
    window.location.href = '/dashboard'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--navy)] flex items-center justify-center p-4">
        <div className="text-[var(--ivory)] font-clash">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[var(--navy)] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[var(--ivory)] rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="font-clash text-2xl font-semibold text-[var(--ink)]">hoodmanlive</h1>
            <p className="text-sm text-[var(--ink-soft)] mt-1">Editorial Dashboard</p>
          </div>
          {authError && (
            <p className="text-[var(--error)] text-sm text-center mb-4">{authError}</p>
          )}
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="editor@hoodmanlive.com"
                required
                className="w-full px-3 py-2 rounded-lg border border-[var(--border-line)] bg-[var(--ivory)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-3 py-2 rounded-lg border border-[var(--border-line)] bg-[var(--ivory)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--gold)] text-[var(--navy)] font-clash font-semibold py-2.5 rounded-lg hover:bg-[color-mix(in_oklab,var(--gold)_85%,white)] transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg-dashboard)] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--navy)] text-[var(--ivory)] flex flex-col">
        <div className="p-5 border-b border-white/10">
          <h1 className="font-clash text-xl font-semibold">hoodmanlive</h1>
          <p className="text-xs text-ivory72 mt-0.5">Editorial Dashboard</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <DashboardLink to="/dashboard">Overview</DashboardLink>
          <DashboardLink to="/dashboard/articles">Articles</DashboardLink>
          <DashboardLink to="/dashboard/editions">Editions</DashboardLink>
          <DashboardLink to="/dashboard/team">Team</DashboardLink>
          <DashboardLink to="/dashboard/settings">Settings</DashboardLink>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleSignOut}
            className="w-full text-sm text-ivory72 hover:text-[var(--gold)] transition-colors"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-playfair text-2xl font-semibold text-[var(--ink)]">Editorial Dashboard</h1>
          <Link
            to="/dashboard/articles"
            className="bg-[var(--gold)] text-[var(--navy)] font-clash font-semibold px-4 py-2 rounded-lg hover:bg-[color-mix(in_oklab,var(--gold)_85%,white)] transition-colors no-underline"
          >
            + New Article
          </Link>
        </div>
        <Outlet />
      </main>
    </div>
  )
}

function DashboardLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-lg text-sm text-ivory72 hover:bg-white/10 hover:text-[var(--gold)] transition-colors"
      activeProps={{ className: 'bg-white/10 text-[var(--gold)] font-medium' }}
    >
      {children}
    </Link>
  )
}
