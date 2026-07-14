import type { ReactNode } from 'react';

interface ForProps<T> {
  each: readonly T[] | null | undefined;
  fallback?: ReactNode;
  /** Must return a node with its own `key` — For does not derive one for you. */
  children: (item: T, index: number) => ReactNode;
}

export function For<T>({ each, fallback = null, children }: ForProps<T>): ReactNode {
  if (!each || each.length === 0) return fallback;

  return each.map(children);
}
