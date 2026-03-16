import { queryOptions } from '@tanstack/react-query';

import { MESSAGES } from '@/shared/constants/messages';
import { STALE_TIME } from '@/shared/constants/stale-time';
import { apiFetch } from '@/shared/lib/api-fetch';

import type { ExampleSchema } from '@/features/example/schema/example.schema';

export const exampleQueryOptions = queryOptions({
  queryKey: ['example'] as const,
  queryFn: async () => {
    const result = await apiFetch<ExampleSchema>('/api/example/');

    if (!result.ok) {
      throw new Error(result.error ?? MESSAGES.ERROR.INTERNAL);
    }

    return result.data;
  },
  staleTime: STALE_TIME.FIFTEEN_MINUTES,
});
