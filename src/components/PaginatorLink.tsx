import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type PaginatorLinkProps = {
  className?: string;
  page: number;
  isActive?: boolean;
  disabled?: boolean;
  children: ReactNode;
};

export const PaginatorLink: FC<PaginatorLinkProps> = ({
  className,
  page,
  isActive,
  disabled,
  children,
}: PaginatorLinkProps) => {
  const router = useRouter();

  const baseClassName = cn(
    'px-3 py-2 leading-tight text-gray-500 border border-gray-300 inline-flex',
    className,
  );

  if (disabled) {
    return (
      <div className={cn('bg-white', baseClassName)}>
        <div className="opacity-50 inline-flex">{children}</div>
      </div>
    );
  }

  return (
    <Link
      href={`${router.pathname}?page=${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        baseClassName,
        isActive
          ? 'bg-blue-100 hover:bg-blue-200 hover:text-gray-800'
          : 'bg-white hover:bg-gray-100 hover:text-gray-700',
      )}>
      {children}
    </Link>
  );
};
