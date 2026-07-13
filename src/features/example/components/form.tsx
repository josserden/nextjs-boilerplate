'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks';
import { Controller } from 'react-hook-form';

import { createExampleAction } from '@/features/example/action/example.action';
import { exampleSchema } from '@/features/example/schema/example.schema';
import { Button } from '@/shared/components/ui/button';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/shared/components/ui/field';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';

const defaultValues = {
  name: '',
  email: '',
  description: '',
  terms: false,
};

export function Form() {
  const { form, action, handleSubmitWithAction, resetFormAndAction } = useHookFormAction(
    createExampleAction,
    zodResolver(exampleSchema),
    {
      formProps: {
        defaultValues,
      },
      actionProps: {
        onSuccess: data => {
          alert(`Form submitted successfully: ${JSON.stringify(data)}`);
          resetFormAndAction();
        },
        onError: ({ error }) => {
          alert(`Form submission failed: ${error.serverError}`);
        },
      },
    },
  );

  return (
    <div className='mx-auto max-w-xl'>
      <form onSubmit={handleSubmitWithAction}>
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

          <Button type='submit' disabled={action.isPending}>
            {action.isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}
