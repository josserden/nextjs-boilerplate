import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/shared/utils/cn';

import type { ComponentProps } from 'react';

const buttonVariants = cva(
  [
    'group/button inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-clip-padding px-2.5 text-sm font-medium whitespace-nowrap',
    'transition-all outline-none select-none active:translate-y-px',
    'has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
    'disabled:pointer-events-none disabled:opacity-50',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost: 'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground',
        destructive:
          'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 text-destructive focus-visible:border-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp data-slot='button' data-variant={variant} className={cn(buttonVariants({ variant, className }))} {...props} />
  );
}

export { Button, buttonVariants };
