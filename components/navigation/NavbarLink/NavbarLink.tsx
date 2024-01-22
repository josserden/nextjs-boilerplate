import React, { FC } from 'react';

export interface NavbarLinkProps {
  title: string;
  href: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ title, href }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:text-base"
    >
      {title}
    </a>
  );
};
