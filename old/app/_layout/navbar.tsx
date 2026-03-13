import { NavLink } from '@/old/app/_shared/components/ui/nav-link';
import { List } from '@/old/app/_shared/components/utilities/list';
import { cn } from '@/old/app/_shared/utils/cn';

import type { ComponentPropsWithoutRef } from 'react';

export function Navbar({ className, ...props }: ComponentPropsWithoutRef) {
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
