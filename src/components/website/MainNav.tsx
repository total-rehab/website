import { FC } from 'react';
import Link from 'next/link';

import cn from 'classnames';
import Image from 'next/image';
import { NavLink } from './NavLink';

type NavProps = {
  className?: string;
};

export const MainNav: FC<NavProps> = ({ className }: NavProps) => (
  <div className="bg-on-surface-regular">
    <div className="w-full container mx-auto p-6">
      <nav
        className={cn('lg:flex justify-between items-end flex-1', className)}
        aria-label="Main Navigation">
        <Link href="/">
          <Image
            alt="Total Rehab logo"
            src="/images/total-rehab-logo.png"
            className="pr-4"
            width={240}
            height={20}
            sizes="240px"
          />
        </Link>
        <ul className="lg:flex gap-x-10 xl:gap-x-16 text-white my-2 lg:my-0 space-y-2 lg:space-y-0">
          <li>
            <NavLink href="/programs">Programs</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/download">Download</NavLink>
          </li>
          <li>
            <NavLink href="/practitioner">Practitioner</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
