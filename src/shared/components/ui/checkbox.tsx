'use client';

import { CheckIcon } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';

import { cn } from '@/shared/utils/cn';

import type { ComponentProps } from 'react';

function Checkbox({ className, ...props }: ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        'relative flex size-4 shrink-0 items-center justify-center rounded-lg border',
        'border-input peer transition-colors outline-none group-has-disabled/field:opacity-50',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'after:absolute after:-inset-x-3 after:-inset-y-2',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3',
        'data-checked:bg-primary data-checked:text-primary-foreground data-checked:border-primary',
        'aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:ring-3',
        'dark:bg-input/30 dark:data-checked:bg-primary dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='grid place-content-center text-current transition-none [&>svg]:size-3.5'
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
