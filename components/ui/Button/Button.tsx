import React, {
  Children,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
} from 'react';

import { classnames } from '@/utils/classnames';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  const childrenCount = Children.count(children);

  return (
    <button
      className={classnames(
        'inline-flex items-center justify-center gap-x-4',
        {
          'gap-4': childrenCount > 1,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
