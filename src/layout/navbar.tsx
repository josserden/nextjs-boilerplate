import { NavLink } from '@/shared/components/ui/nav-link';
import { List } from '@/shared/components/utilities/list';
import { siteConfig } from '@/shared/config/site';

import type { ComponentProps } from 'react';

interface NavbarProps extends ComponentProps<'nav'> {
  listClassName?: string;
}

export function Navbar({ listClassName, ...props }: NavbarProps) {
  return (
    <nav {...props}>
      <List
        data={siteConfig.navLinks}
        renderItem={item => <NavLink href={item.href}>{item.label}</NavLink>}
        keyExtractor={item => item.label.toLowerCase()}
        className={listClassName}
      />
    </nav>
  );
}
