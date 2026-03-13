'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { throttle } from 'nuqs';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { getQueryClient } from '@/old/app/_shared/lib/tanstack/get-query-client';

import type { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter
        defaultOptions={{
          shallow: false,
          scroll: true,
          clearOnDefault: false,
          limitUrlUpdates: throttle(250),
        }}
      >
        {children}
        <ReactQueryDevtools />
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
