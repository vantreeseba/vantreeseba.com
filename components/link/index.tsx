// 'use client';

import Link from 'next/link';
import { NavMenu, navigationMenuTriggerStyle } from '../ui/navigation-menu';

// import { useRouter, usePathname } from 'next/navigation';
//
// function ActiveLink({ children = [], href = '', className = '' }) {
//   const router = useRouter();
//   const pathName = usePathname();
//
//   const isCurrentLink = pathName === href;
//   className += isCurrentLink ? '' : '';
//
//   const handleClick = (e) => {
//     e.preventDefault();
//     router.push(href);
//   };
//
//   return (
//     <a href={href} onClick={handleClick} className={className}>
//       {children}
//     </a>
//   );
// }
//
// export default ActiveLink;

type NavMenuNextLinkProps = {
  href: string;
  children?: React.ReactNode;
};

export function NavMenuNextLink({ href, children }: NavMenuNextLinkProps) {
  return (
    <NavMenu.Item>
      <Link href={href} legacyBehavior passHref>
        <NavMenu.Link className={navigationMenuTriggerStyle()}>{children}</NavMenu.Link>
      </Link>
    </NavMenu.Item>
  );
}
