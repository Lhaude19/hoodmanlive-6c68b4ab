import * as React from 'react'
import { cn } from '#/lib/utils'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-clash font-semibold transition-colors focus:outline-none focus:ring-3 focus:ring-[var(--gold)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg',
          {
            'bg-[var(--gold)] text-[var(--navy)] hover:bg-[color-mix(in_oklab,var(--gold)_85%,white)]':
              variant === 'primary',
            'bg-[var(--ivory)] text-[var(--ink)] border border-[var(--border-line)] hover:bg-maroon10':
              variant === 'secondary',
            'bg-transparent text-[var(--ink)] hover:bg-[var(--border-line)]':
              variant === 'ghost',
            'bg-[rgba(196,71,71,0.1)] text-[#9f3030] border border-[rgba(196,71,71,0.28)] hover:bg-[rgba(196,71,71,0.15)]':
              variant === 'destructive',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-sm': size === 'md',
            'px-7 py-3.5 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }