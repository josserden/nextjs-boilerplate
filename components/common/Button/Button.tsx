import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import clsx from 'clsx';

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
      className={clsx(
        'inline-flex items-center justify-center gap-4',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
