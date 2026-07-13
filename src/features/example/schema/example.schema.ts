import { z } from 'zod';

export const exampleSchema = z.object({
  name: z.string().min(1, 'Name is required').trim().min(3, 'Name must be at least 3 characters'),
  email: z.email('Invalid email address'),
  description: z
    .string()
    .min(1, 'Description is required')
    .trim()
    .min(20, 'Description must be at least 20 characters')
    .max(1000, 'Description must be at most 1000 characters'),

  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions to proceed',
  }),
});

export type ExampleSchema = z.infer<typeof exampleSchema>;
