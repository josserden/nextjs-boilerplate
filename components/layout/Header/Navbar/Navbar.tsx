import React, { FC } from 'react';

import { NavbarLink, NavbarLinkProps } from '../NavbarLink';
import { menuItems } from '../constants';

export const Navbar: FC = () => {
  return (
    <nav
      className={
        'hidden md:flex md:w-auto md:border-none md:bg-transparent md:py-0 md:shadow-none'
      }
    >
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
