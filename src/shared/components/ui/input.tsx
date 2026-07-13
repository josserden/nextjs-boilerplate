import { cn } from '@/shared/utils/cn';

import type { ComponentProps } from 'react';

function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'bg-input/30 h-8 w-full min-w-0 rounded-lg border px-2.5 py-1 text-base transition-colors outline-none md:text-sm',
        'border-input placeholder:text-muted-foreground',
        'file:text-foreground file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'disabled:bg-input/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:ring-3',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
