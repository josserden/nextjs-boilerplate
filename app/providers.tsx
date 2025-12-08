'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { throttle } from 'nuqs';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { type ReactNode } from 'react';

import { getQueryClient } from '@/app/_shared/lib/tanstack/get-query-client';

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
