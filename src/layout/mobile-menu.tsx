import { Menu } from 'lucide-react';
import Image from 'next/image';

import { Navbar } from '@/layout/navbar';
import { buttonVariants } from '@/shared/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className={buttonVariants({ variant: 'ghost', className: 'md:hidden' })}>
        <Menu />
        <span className='sr-only'>Open mobile menu</span>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image src='next.svg' alt='site logo' width={120} height={24} loading='lazy' />
          </SheetTitle>
          <SheetDescription className='sr-only'>Site navigation menu</SheetDescription>
        </SheetHeader>

        <div className='flex-1 p-4'>
          <Navbar className='space-y-5' />
        </div>

        <SheetFooter>
          <SheetClose className={buttonVariants({ variant: 'outline' })}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
