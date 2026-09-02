import * as React from 'react'
import { cn } from '#/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, id, ...props }, ref) => {
    const inputId = id || React.useId()
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-body text-[var(--ink-soft)] mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            'w-full px-4 py-3 rounded-lg bg-[var(--ivory)] text-[var(--ink)] placeholder-[var(--ink-soft)] border transition-colors',
            'focus:outline-none focus:ring-3 focus:ring-[var(--gold)] focus:ring-offset-2',
            error
              ? 'border-[var(--error)] focus:ring-[var(--error)]'
              : 'border-[var(--border-line)]',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-[#9f3030]" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }