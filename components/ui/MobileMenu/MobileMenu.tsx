import React, { FC } from 'react';

import { menuItems } from '@/components/navigation/Navbar/Navbar.constants';
import {
  NavbarLink,
  NavbarLinkProps,
} from '@/components/navigation/NavbarLink';

export const MobileMenu: FC = () => {
  return (
    <nav className="absolute left-0 top-full w-full border bg-white py-2 shadow-sm md:hidden">
      {menuItems.map((item: NavbarLinkProps) => (
        <NavbarLink
          key={item.title.toLowerCase()}
          href={item.href}
          title={item.title}
        />
      ))}
    </nav>
  );
};
