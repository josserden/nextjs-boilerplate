import '@/app/_shared/styles/globals.css';
import { Inter } from 'next/font/google';

import { Footer } from '@/app/_shared/components/layout/footer';
import { Header } from '@/app/_shared/components/layout/header';
import { cn } from '@/app/_shared/utils/cn';
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
