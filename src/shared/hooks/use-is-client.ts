'use client';

import { useSyncExternalStore } from 'react';

/**
 * Hook to check if code is running on the client side
 * Useful for preventing hydration mismatches
 */

const subscribe = () => () => {};

export function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
