import * as zod from 'zod';

export const schema = zod.object({
  name: zod
    .string()
    .min(3, { message: 'Must be 3 or more characters long' })
    .trim(),
  email: zod.string().email({ message: 'Please enter a valid email address.' }),
  details: zod
    .string()
    .min(10, { message: 'Must be 10 or more characters long' })
    .max(500, { message: 'Must be 500 or less characters long' })
    .trim(),
  terms: zod
    .boolean()
    .refine(value => value, { message: 'This field is required.' }),
});
