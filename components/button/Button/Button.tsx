import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

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
  return (
    <button
      className={classnames(
        'inline-flex items-center justify-center gap-4',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
