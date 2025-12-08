'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/app/_shared/lib/utils';

import type { LinkProps } from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

export function NavLink({ className, ...props }: ComponentPropsWithoutRef<'a'> & LinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(pathname === props.href ? 'pointer-events-none font-bold underline' : 'hover:underline', className)}
      {...props}
    />
  );
}
