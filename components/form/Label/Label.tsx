import React, { FC } from 'react';

import { classnames } from '@/utils/classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  labelText?: string;
};

export const Label: FC<Props> = ({ labelText, children, className }) => {
  return (
    <label className={classnames('relative', className)}>
      {labelText && <span className="text-gray-700">{labelText}</span>}
      {children}
    </label>
  );
};
