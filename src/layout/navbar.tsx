import { NavLink } from '@/shared/components/ui/nav-link';
import { For } from '@/shared/components/utilities/for';
import { siteConfig } from '@/shared/config/site';
import { cn } from '@/shared/utils/cn';

import type { ComponentProps } from 'react';

export function Navbar({ className, ...props }: ComponentProps<'nav'>) {
  return (
    <nav {...props}>
      <div role='list' className={cn(className)}>
        <For each={siteConfig.navLinks}>
          {item => (
            <NavLink key={item.label.toLowerCase()} href={item.href} role='listitem'>
              {item.label}
            </NavLink>
          )}
        </For>
      </div>
    </nav>
  );
}
