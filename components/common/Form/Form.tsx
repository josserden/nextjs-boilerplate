'use client';

import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/common/Button';
import { Label } from './Label';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { Checkbox } from './Checkbox';
import { schema } from './constants';

type Inputs = Record<string, object>;

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form className="mx-auto w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full grid-cols-1 gap-6">
        <Label labelText={'Full name'} className="text-left">
          <Input
            {...register('name')}
            error={errors.name?.message}
            placeholder="John Doe"
          />
        </Label>

        <Label labelText={'Email address'} className="text-left">
          <Input
            {...register('email')}
            error={errors.email?.message}
            placeholder="john@example.com"
          />
        </Label>

        <Label labelText={'Details'} className="text-left">
          <TextArea
            {...register('details')}
            className="resize-none"
            rows={5}
            error={errors.details?.message}
            placeholder="Enter your message here..."
          />
        </Label>

        <div className="text-left">
          <Label className="inline-flex cursor-pointer items-center">
            <Checkbox
              {...register('terms')}
              error={errors.terms?.message}
              labelText={'I agree to the terms and conditions'}
            />
          </Label>
        </div>

        <Button
          className="rounded-md bg-indigo-500 px-5 py-3 font-bold text-white transition duration-300 ease-in-out hover:bg-indigo-600"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
