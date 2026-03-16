import { Slot } from 'radix-ui';

import type { ReactNode } from 'react';

interface ShowProps<T> {
  when: T | null | undefined | false;
  fallback?: ReactNode;
  asChild?: boolean;
  children?: ReactNode | ((value: NonNullable<T>) => ReactNode);
}

export function Show<T>({ when, fallback = null, asChild = false, children }: ShowProps<T>) {
  if (!when) return <>{fallback}</>;

  const value = when as NonNullable<T>;
  const content = typeof children === 'function' ? children(value) : children;

  if (asChild) {
    return <Slot.Root>{content}</Slot.Root>;
  }

  return <>{content}</>;
}
