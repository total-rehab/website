import cn from 'classnames';
import type { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
}: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'text-white bg-secondary-regular hover:bg-secondary-dark font-medium rounded-lg px-5 py-2.5 select-none',
      className,
    )}>
    {children}
  </button>
);
