import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/utils/cn';

import type { HTMLAttributes } from 'react';

const typographyVariants = cva('font-sans', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-bold tracking-tight',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
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

function Typography({ className, variant, as: Component = 'p', ...props }: TypographyProps) {
  return <Component className={cn(typographyVariants({ variant }), className)} {...props} />;
}

export { Typography, typographyVariants };
