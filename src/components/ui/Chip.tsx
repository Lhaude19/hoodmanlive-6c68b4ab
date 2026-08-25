import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean
  variant?: 'default' | 'outline'
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, pressed = false, variant = 'default', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center font-clash text-xs uppercase tracking-wider rounded-full px-4 py-2 min-h-[44px] transition-all duration-200 ease-out',
        'focus:outline-none focus:ring-3 focus:ring-[var(--gold)] focus:ring-offset-2',
        pressed
          ? 'bg-[var(--navy)] text-ivory border-[var(--navy)]'
          : variant === 'default'
          ? 'bg-[var(--ivory)] text-[var(--ink-soft)] border-[var(--border-line)] hover:border-[var(--orange)]'
          : 'bg-transparent text-[var(--ink-soft)] border-[var(--border-line)] hover:border-[var(--orange)]',
        className
      )}
      aria-pressed={pressed}
      {...props}
    >
      {children}
    </button>
  )
)
Chip.displayName = 'Chip'

export { Chip }