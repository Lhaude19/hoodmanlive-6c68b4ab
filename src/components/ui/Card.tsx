import * as React from 'react'
import { cn } from '#/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-[var(--ivory)] rounded-lg overflow-hidden transition-transform duration-200 ease-out',
        'before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[var(--gold)]',
        'hover:-translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-5 space-y-3', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

export { Card, CardContent }