import React, { FC } from 'react';
import clsx from 'clsx';

import { ButtonProps } from '@/components/common/Button';

export const IconButton: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx('inline-flex items-center justify-center', className)}
      {...props}
    >
      {children}
    </button>
  );
};
