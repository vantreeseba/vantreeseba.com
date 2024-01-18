'use client';

import { NavMenu } from '@/components/ui/navigation-menu';
import { NavMenuNextLink } from '@/components/link';

export function Menu() {
  return (
    <NavMenu className="grid">
      <NavMenu.List>
        <NavMenuNextLink href="/docs">docs</NavMenuNextLink>
        <NavMenuNextLink href="/docs">docs</NavMenuNextLink>
        <NavMenuNextLink href="/docs">docs</NavMenuNextLink>
        <NavMenuNextLink href="/docs">docs</NavMenuNextLink>
      </NavMenu.List>
    </NavMenu>
  );
}
