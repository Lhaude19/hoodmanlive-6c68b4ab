import * as React from 'react'
import { cn } from '#/lib/utils'
import { initials } from '#/lib/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, name, src, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-8 h-8 text-xs',
      md: 'w-10 h-10 text-sm',
      lg: 'w-12 h-12 text-base',
      xl: 'w-24 h-24 text-2xl',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full bg-[var(--navy)] text-[var(--gold)] font-clash font-semibold',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src ? <img src={src} alt="" className="w-full h-full rounded-full" /> : name && initials(name)}
      </div>
    )
  }
)
Avatar.displayName = 'Avatar'

export { Avatar }