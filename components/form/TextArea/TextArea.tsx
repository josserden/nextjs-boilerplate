import React, { DetailedHTMLProps, ForwardedRef, forwardRef } from 'react';

import { classnames } from '@/utils/classnames';
import { ErrorMessage } from '@/components/form/ErrorMessage';

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
          className={classnames(
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
