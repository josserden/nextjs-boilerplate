/**
 * Example query options for TanStack Query
 * Place global queries here (user, auth, settings, etc.)
 */

import { queryOptions } from '@tanstack/react-query';

export const exampleQueries = {
  all: () => ['example'] as const,

  detail: (id: string) =>
    queryOptions({
      queryKey: [...exampleQueries.all(), 'detail', id] as const,
      queryFn: async () => {
        // const response = await fetch(`/api/example/${id}`);
        // return response.json();
        return { id, data: 'example' };
      },
    }),
};
