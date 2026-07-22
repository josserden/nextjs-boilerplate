'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/utils/cn';

import type { ComponentProps } from 'react';

export function NavLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const rawHref = typeof props.href === 'string' ? props.href : props.href.pathname;
  const href = rawHref ? normalizeHref(rawHref) : undefined;
  const isActive = href ? isActiveHref(pathname, href) : false;

  return (
    <Link
      data-active={isActive || undefined}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'hover:underline data-active:pointer-events-none data-active:font-bold data-active:underline',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

function normalizeHref(href: string) {
  return href === '/' ? href : href.replace(/\/+$/, '');
}

function isActiveHref(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
