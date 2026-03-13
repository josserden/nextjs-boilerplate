import { cn } from '@/old/app/_shared/utils/cn';

import type { ReactNode } from 'react';

interface ListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T, index: number) => string | number;
  className?: string;
  itemClassName?: string;
}

export function List<T>({ data, renderItem, keyExtractor, className, itemClassName }: ListProps) {
  return (
    <ul className={cn(className)}>
      {data.map((item, index) => (
        <li key={keyExtractor(item, index)} className={itemClassName}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}
