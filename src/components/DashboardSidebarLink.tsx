import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
}: DashboardSidebarLinkProps) => {
  const router = useRouter();
  const isCurrent = router.asPath === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center p-1.5 text-gray-900 rounded',
        isCurrent
          ? 'bg-blue-100 text-blue-900 hover:bg-blue-200'
          : 'hover:bg-gray-200',
      )}
      onClick={onClick}>
      <span className="flex-1 ml-3 whitespace-nowrap">{children}</span>
      {badge && (
        <span className="inline-flex items-center justify-center h-3 py-3 px-2 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
};
