import '@/app/_shared/styles/globals.css';
import { Inter } from 'next/font/google';

import { Footer } from '@/app/_shared/components/layout/Footer';
import { Header } from '@/app/_shared/components/layout/Header';
import { cn } from '@/app/_shared/lib/utils';
import Providers from '@/app/providers';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const interSans = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Next.js Starter',
  description: 'A starter for Next.js projects.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('flex min-h-dvh flex-col antialiased', interSans.variable)}>
        <Providers>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
