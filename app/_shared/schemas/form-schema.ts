import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .refine(val => val.trim().length > 0, {
      message: 'Name cannot be only spaces',
    })
    .refine(val => val === val.trim(), {
      message: 'Remove spaces at the beginning or end',
    })
    .refine(val => val.trim().length >= 3, {
      message: 'Name must be at least 3 characters',
    }),

  email: z.email({ pattern: z.regexes.unicodeEmail }),

  description: z
    .string()
    .min(1, 'Description is required')
    .refine(val => val.trim().length > 0, {
      message: 'Description cannot be only spaces',
    })
    .refine(val => val === val.trim(), {
      message: 'Remove spaces at the beginning or end',
    })
    .refine(val => val.trim().length >= 20, {
      message: 'Description must be at least 20 characters',
    })
    .refine(val => val.trim().length <= 100, {
      message: 'Description must be at most 100 characters',
    }),

  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions to proceed',
  }),
});

export type FormSchema = z.infer<typeof formSchema>;
