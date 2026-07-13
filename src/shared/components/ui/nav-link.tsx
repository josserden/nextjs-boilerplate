'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/utils/cn';

import type { ComponentProps } from 'react';

export function NavLink({ className, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const rawHref = typeof props.href === 'string' ? props.href : props.href.pathname;
  const href = rawHref && rawHref !== '/' ? rawHref.replace(/\/+$/, '') : rawHref;
  const isActive = href
    ? href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`)
    : false;

  return (
    <Link
      data-active={isActive || undefined}
      className={cn(
        'hover:underline data-active:pointer-events-none data-active:font-bold data-active:underline',
        className,
      )}
      {...props}
    />
  );
}
