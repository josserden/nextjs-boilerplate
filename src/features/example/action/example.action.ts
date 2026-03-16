'use server';

import { exampleSchema } from '@/features/example/schema/example.schema';
import { actionClient } from '@/shared/lib/safe-action/action-client';

/**
 * Example Server Actions: Create
 * Place global actions here (user updates, form submissions, etc.)
 */
export const createExampleAction = actionClient.inputSchema(exampleSchema).action(async ({ parsedInput }) => {
  // Simulate API call
  // const response = await fetch('/api/items', {
  //   method: 'POST',
  //   body: JSON.stringify(parsedInput),
  // });

  // Revalidate cache if needed
  // revalidatePath('/');

  return { success: true, data: { ...parsedInput, id: '1' } };
});
