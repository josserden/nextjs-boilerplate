'use server';

/**
 * Example Server Actions: Create
 * Place global actions here (user updates, form submissions, etc.)
 */

export async function create(formData: FormData) {
  const name = formData.get('name') as string;

  // Simulate API call
  // const response = await fetch('/api/items', {
  //   method: 'POST',
  //   body: JSON.stringify({ name }),
  // });

  // Revalidate cache if needed
  // revalidatePath('/');

  return { success: true, data: { id: '1', name } };
}
