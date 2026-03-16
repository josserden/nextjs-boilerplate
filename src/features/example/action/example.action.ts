'use server';

import { exampleSchema } from '@/features/example/schema/example.schema';
import { MESSAGES } from '@/shared/constants/messages';
import { actionClient } from '@/shared/lib/action-client';
import { createResponse } from '@/shared/utils/create-response';

/**
 * Example Server Action: Create
 * Demonstrates apiFetch usage with createResponse for consistent response shape.
 */
export const createExampleAction = actionClient.inputSchema(exampleSchema).action(async ({ parsedInput }) => {
  // Example: calling an external API with apiFetch
  // const result = await apiFetch<ExampleSchema>('/api/items', {
  //   method: 'POST',
  //   body: JSON.stringify(parsedInput),
  //   headers: { 'Content-Type': 'application/json' },
  // });
  //
  // if (!result.ok) {
  //   throw new Error(result.error);
  // }

  // Revalidate cache if needed
  // revalidatePath('/');

  return createResponse({ ...parsedInput, id: crypto.randomUUID() }, MESSAGES.SUCCESS.CREATE);
});
