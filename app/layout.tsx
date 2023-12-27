import './globals.css';

import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import clsx from 'clsx';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import type { Metadata } from 'next';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Starter',
  description: 'A starter for Next.js projects.',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          'flex h-full min-h-screen flex-col bg-slate-50',
        )}
      >
        <Header />

        <main className="flex-grow" role="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
