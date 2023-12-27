'use client';

import React, { FC, useEffect, useState } from 'react';
import { useMedia, useToggle, useLockBodyScroll } from 'react-use';

import { IconButton } from '@/components/common/IconButton';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

import Logo from '@/public/vercel.svg';

export const Header: FC = ({ ...props }) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px)');

  useLockBodyScroll(isMenuOpen);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsBrowser(true);
    }
  }, []);

  useEffect(() => {
    if (isBrowser && !isMobile) {
      toggleMenu(false);
    }
  }, [isBrowser, isMobile, toggleMenu]);

  return (
    <header
      className="relative border-b border-gray-300 py-6"
      role="banner"
      {...props}
    >
      <div className="container flex items-center justify-between">
        <Logo className="w-24" />

        {isBrowser && isMobile && (
          <IconButton
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            type="button"
            onClick={() => toggleMenu()}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </IconButton>
        )}

        {isBrowser && isMenuOpen && <MobileMenu />}

        {isBrowser && isTablet && <Navbar />}
      </div>
    </header>
  );
};
