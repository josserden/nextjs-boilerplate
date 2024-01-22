import React, { DetailedHTMLProps, ForwardedRef, forwardRef } from 'react';

import { classnames } from '@/utils/classnames';
import { ErrorMessage } from '@/components/form/ErrorMessage';

export interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  className?: string;
}

export const Input = forwardRef(
  (
    { error, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <>
        <input
          ref={ref}
          className={classnames(
            'inputDefault',
            {
              inputError: error,
            },
            className,
          )}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  },
);

Input.displayName = 'Input';
