import { Inter } from 'next/font/google';

import Providers from '@/app/providers';
import { Footer } from '@/layout/footer';
import { Header } from '@/layout/header';
import { siteConfig } from '@/shared/config/site';
import { cn } from '@/shared/utils/cn';

import type { LayoutProps } from '@/shared/types/common';
import '@/app/globals.css';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body className={cn('flex min-h-dvh flex-col font-sans antialiased', inter.variable)}>
        <Providers>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
