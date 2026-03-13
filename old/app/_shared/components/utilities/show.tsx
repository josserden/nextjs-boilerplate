import { Slot } from '@radix-ui/react-slot';
import { Fragment } from 'react';

import type { ReactNode } from 'react';

interface ShowProps<T> {
  when: T | null | undefined | false;
  fallback?: ReactNode;
  asChild?: boolean;
  children?: ReactNode | ((value: NonNullable<T>) => ReactNode);
}

export function Show<T>({ when, fallback = null, asChild = false, children }: ShowProps<T>) {
  if (!when) return <>{fallback}</>;

  const content = typeof children === 'function' ? children(when) : children;
  const Comp = asChild ? Slot : Fragment;

  return <Comp>{content}</Comp>;
}
