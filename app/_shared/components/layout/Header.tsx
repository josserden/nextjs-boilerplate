import Image from 'next/image';

import { Navbar } from '@/app/_shared/components/layout/Navbar';

export function Header() {
  return (
    <header className='relative border-b border-slate-200 py-4'>
      <div className='container flex items-center justify-between'>
        <Image src='next.svg' alt='site logo' width={120} height={40} loading='lazy' />
        <Navbar className='flex items-center gap-x-3' />
      </div>
    </header>
  );
}
