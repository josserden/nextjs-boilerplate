'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/old/app/_shared/components/ui/button';
import { Checkbox } from '@/old/app/_shared/components/ui/checkbox';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/old/app/_shared/components/ui/field';
import { Input } from '@/old/app/_shared/components/ui/input';
import { Label } from '@/old/app/_shared/components/ui/label';
import { Textarea } from '@/old/app/_shared/components/ui/textarea';
import { formSchema } from '@/old/app/_shared/schemas/form-schema';

import type { FormSchema } from '@/old/app/_shared/schemas/form-schema';

export function Form() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      description: '',
      terms: false,
    },
  });

  function onSubmit(values: FormSchema) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <div className='mx-auto max-w-xl'>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name='name'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='name'>Name</FieldLabel>
                <Input {...field} id='name' aria-invalid={fieldState.invalid} placeholder='Enter your name' />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name='email'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='email'>Email</FieldLabel>
                <Input
                  {...field}
                  id='email'
                  type='email'
                  aria-invalid={fieldState.invalid}
                  placeholder='Enter your email'
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name='description'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='description'>Description</FieldLabel>
                <Textarea
                  {...field}
                  id='description'
                  aria-invalid={fieldState.invalid}
                  placeholder='Enter a description'
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name='terms'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} orientation='horizontal'>
                <Checkbox id='terms' checked={field.value} onCheckedChange={field.onChange} />
                <Label htmlFor='terms'>Accept terms and conditions</Label>
              </Field>
            )}
          />

          <Button>Submit</Button>
        </FieldGroup>
      </form>
    </div>
  );
}
