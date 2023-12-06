import React, { FC } from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  labelText?: string;
};

export const Label: FC<Props> = ({ labelText, children, className }) => {
  return (
    <label className={clsx('relative', className)}>
      {labelText && <span className="text-gray-700">{labelText}</span>}
      {children}
    </label>
  );
};
