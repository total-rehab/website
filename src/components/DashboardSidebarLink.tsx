import Link from 'next/link';
import { ReactNode, SyntheticEvent } from 'react';

type DashboardSidebarLinkProps = {
  href: string;
  badge?: number | string;
  children: ReactNode;
  onClick?: (evt: SyntheticEvent) => void;
};

export const DashboardSidebarLink = ({
  href,
  badge,
  children,
  onClick,
}: DashboardSidebarLinkProps) => (
  <Link
    href={href}
    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
    onClick={onClick}>
    <span className="flex-1 ml-3 whitespace-nowrap">{children}</span>
    {badge && (
      <span className="inline-flex items-center justify-center h-3 py-3 px-2 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
        {badge}
      </span>
    )}
  </Link>
);
