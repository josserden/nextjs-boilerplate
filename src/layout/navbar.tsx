import { NavLink } from '@/shared/components/ui/nav-link';
import { For } from '@/shared/components/utilities/for';
import { siteConfig } from '@/shared/config/site';
import { cn } from '@/shared/utils/cn';

import type { ComponentProps } from 'react';

export function Navbar({ className, ...props }: ComponentProps<'nav'>) {
  return (
    <nav {...props}>
      <ul className={cn(className)}>
        <For each={siteConfig.navLinks}>
          {item => (
            <li key={item.label.toLowerCase()}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
