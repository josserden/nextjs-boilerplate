import Image from 'next/image';

import { MobileMenu } from '@/old/app/_layout/mobile-menu';
import { Navbar } from '@/old/app/_layout/navbar';

export function Header() {
  return (
    <header className='relative border-b border-slate-200 py-4'>
      <div className='container flex items-center justify-between'>
        <Image src='next.svg' alt='site logo' width={120} height={40} loading='lazy' />
        <Navbar className='hidden items-center gap-x-3 md:flex' />
        <MobileMenu />
      </div>
    </header>
  );
}
