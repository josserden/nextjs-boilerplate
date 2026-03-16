import { NavLink } from '@/shared/components/ui/nav-link';
import { List } from '@/shared/components/utilities/list';
import { siteConfig } from '@/shared/config/site';
import { cn } from '@/shared/utils/cn';

import type { ComponentProps } from 'react';

export function Navbar({ className, ...props }: ComponentProps<'nav'>) {
  return (
    <nav {...props}>
      <List
        data={siteConfig.navLinks}
        renderItem={item => <NavLink href={item.href}>{item.label}</NavLink>}
        keyExtractor={item => item.label.toLowerCase()}
        className={cn(className)}
      />
    </nav>
  );
}
