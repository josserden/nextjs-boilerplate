'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/utils/cn';

import type { ComponentProps } from 'react';

export function NavLink({ className, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      data-active={pathname === props.href || undefined}
      className={cn(
        'hover:underline data-active:pointer-events-none data-active:font-bold data-active:underline',
        className,
      )}
      {...props}
    />
  );
}
