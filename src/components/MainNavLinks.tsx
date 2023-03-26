import type { FC } from 'react';
import cn from 'classnames';
import { NavLink } from './NavLink';

type MainNavLinksProps = {
  className?: string;
};

const ACTIVE_LINK_CLASS_NAME = 'text-primary-regular font-medium';

export const MainNavLinks: FC<MainNavLinksProps> = ({
  className,
}: MainNavLinksProps) => (
  <ul
    className={cn(
      'gap-x-10 xl:gap-x-16 text-white mt-4 lg:mt-0 space-y-4 lg:space-y-0 text-center lg:flex overflow-hidden',
      'transition-height duration-500 ease-in-out',
      className,
    )}>
    <li>
      <NavLink href="/programs/1" activeClassName={ACTIVE_LINK_CLASS_NAME}>
        Programs
      </NavLink>
    </li>
    <li>
      <NavLink href="/blog-posts/1" activeClassName={ACTIVE_LINK_CLASS_NAME}>
        Blog
      </NavLink>
    </li>
    <li>
      <NavLink href="/about" activeClassName={ACTIVE_LINK_CLASS_NAME}>
        About
      </NavLink>
    </li>
    <li>
      <NavLink href="/download" activeClassName={ACTIVE_LINK_CLASS_NAME}>
        Download
      </NavLink>
    </li>
    <li>
      <NavLink href="/buy" activeClassName={ACTIVE_LINK_CLASS_NAME}>
        Practitioner
      </NavLink>
    </li>
  </ul>
);
