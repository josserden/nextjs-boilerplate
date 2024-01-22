'use client';

import React, { FC } from 'react';

import { IconButton } from '@/components/button/IconButton';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { Navbar } from '@/components/navigation/Navbar';
import { useBrowser } from '@/hooks/useBrowser';
import { useToggleMenu } from '@/hooks/useToggleMenu';

import Logo from '@/public/vercel.svg';

export const Header: FC = ({ ...props }) => {
  const { isBrowser } = useBrowser();
  const { isMenuOpen, toggleMenu, isMobile, isTablet } = useToggleMenu();

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
            onClick={toggleMenu}
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
