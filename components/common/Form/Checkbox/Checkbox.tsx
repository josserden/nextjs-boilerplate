import React, { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

import { InputProps } from '../Input';

export const Checkbox = forwardRef(
  (
    {
      error,
      className,
      labelText,
      ...props
    }: InputProps & { labelText?: string },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <>
        <input
          ref={ref}
          type="checkbox"
          className={clsx(
            'rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0',
            {
              'border-rose-500 focus:border-rose-300 focus:ring-rose-200':
                error,
            },
            className,
          )}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />

        <span
          className={clsx('ml-2', {
            'text-rose-500': error,
          })}
        >
          {labelText}
        </span>
      </>
    );
  },
);

Checkbox.displayName = 'Checkbox';
