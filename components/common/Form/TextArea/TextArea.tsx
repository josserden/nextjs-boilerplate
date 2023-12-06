import React, { DetailedHTMLProps, ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

import { ErrorMessage } from '../ErrorMessage';

interface TextAreaProps
  extends DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: string;
  className?: string;
}

export const TextArea = forwardRef(
  (
    { error, className, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={clsx(
            'inputDefault',
            {
              inputError: error,
            },
            className,
          )}
          {...props}
        ></textarea>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  },
);

TextArea.displayName = 'TextArea';
