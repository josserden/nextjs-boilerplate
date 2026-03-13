import { Menu } from 'lucide-react';
import Image from 'next/image';

import { Navbar } from '@/old/app/_layout/navbar';
import { Button } from '@/old/app/_shared/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/old/app/_shared/components/ui/sheet';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' className='md:hidden'>
          <Menu />
          <span className='sr-only'>Open mobile menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image src='next.svg' alt='site logo' width={120} height={40} loading='lazy' />
          </SheetTitle>
        </SheetHeader>

        <div className='flex-1 p-4'>
          <Navbar className='space-y-5' />
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant='outline'>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
