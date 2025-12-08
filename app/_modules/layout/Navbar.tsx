import { NavLink } from '@/app/_shared/components/ui/NavLink';
import { List } from '@/app/_shared/components/utilities/List';
import { cn } from '@/app/_shared/lib/utils';

import type { ComponentPropsWithoutRef } from 'react';

export function Navbar({ className, ...props }: ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <List
        data={[
          {
            label: 'Link 1',
            href: '#',
          },
          {
            label: 'Link 2',
            href: '#',
          },
          {
            label: 'Link 3',
            href: '#',
          },
        ]}
        renderItem={item => <NavLink href={item.href}>{item.label}</NavLink>}
        keyExtractor={item => item.label.toLowerCase()}
        className={cn(className)}
      />
    </nav>
  );
}
