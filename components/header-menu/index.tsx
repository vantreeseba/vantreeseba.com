'use client';

import { NavMenu } from '@/components/ui/navigation-menu';
import { NavMenuNextLink } from '@/components/link';

export function HeaderMenu() {
  return (
    <NavMenu className="grid">
      <NavMenu.List>
        <NavMenuNextLink href="/">me</NavMenuNextLink>
        <NavMenuNextLink href="/projects">projects</NavMenuNextLink>
        <NavMenuNextLink href="/games">games</NavMenuNextLink>
      </NavMenu.List>
    </NavMenu>
  );
}
