'use client';

import { NuqsAdapter } from 'nuqs/adapters/next/app';

import type { LayoutProps } from '@/shared/types/common';

function sortSearchParamsAlphabetically(search: URLSearchParams) {
  search.sort();
  return search;
}

export default function Providers({ children }: LayoutProps) {
  return (
    <NuqsAdapter defaultOptions={{ shallow: false }} processUrlSearchParams={sortSearchParamsAlphabetically}>
      {children}
    </NuqsAdapter>
  );
}
