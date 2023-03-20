import { FC, ReactNode } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  activeClassName?: string;
};

export const NavLink: FC<NavLinkProps> = ({
  children,
  href,
  activeClassName,
}: NavLinkProps) => {
  const router = useRouter();
  const isCurrent = router.asPath === href;

  return (
    <Link
      href={href}
      aria-current={isCurrent ? 'page' : undefined}
      className={cn(
        'underline-offset-8 text-lg hover:underline',
        isCurrent && activeClassName,
      )}>
      {children}
    </Link>
  );
};
