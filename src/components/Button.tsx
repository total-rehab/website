import cn from 'classnames';
import type { FC, ReactNode } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  isLoading,
}: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'text-white bg-secondary-regular hover:bg-secondary-dark font-medium rounded-lg px-5 py-2.5 select-none',
      className,
    )}>
    <div className="flex items-center">
      {children}
      {isLoading && <LoadingSpinner size={16} className="ml-3" />}
    </div>
  </button>
);
