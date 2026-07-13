import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/utils/cn';

import type { HTMLAttributes } from 'react';

const typographyVariants = cva('font-sans text-balance', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-bold tracking-tight',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
      h6: 'scroll-m-20 text-base font-semibold tracking-tight',
      p: 'text-base leading-7',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TypographyProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  as?: TypographyElement;
}

// Explicit mapping so a future non-tag variant (e.g. `lead`, `muted`) can't be
// mistaken for an HTML tag name — it just falls back to `p` unless `as` overrides it.
const HEADING_VARIANTS = new Set<string>(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

function Typography({ className, variant, as, ...props }: TypographyProps) {
  const Component = as ?? (variant && HEADING_VARIANTS.has(variant) ? variant : 'p');

  return <Component className={cn(typographyVariants({ variant }), className)} {...props} />;
}

export { Typography, typographyVariants };
