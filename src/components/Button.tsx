import cn from 'classnames';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  href?: string;
  isSubmitButton?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  isLoading,
  href,
  isSubmitButton,
}: ButtonProps) => {
  const content = (
    <div className="flex items-center">
      {children}
      {isLoading && <LoadingSpinner size={16} className="ml-3" />}
    </div>
  );

  const classNames = cn(
    'text-white bg-secondary-regular hover:bg-secondary-dark font-medium rounded-lg px-5 py-2.5 select-none',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(classNames, 'inline-block')}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={isSubmitButton ? 'submit' : 'button'}
      onClick={onClick}
      disabled={isLoading}
      className={classNames}>
      {content}
    </button>
  );
};
