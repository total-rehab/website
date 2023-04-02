import { FC, ReactNode } from 'react';
import cn from 'classnames';

type ContainerProps = {
  className?: string;
  children?: ReactNode;
  small?: boolean;
};

export const Container: FC<ContainerProps> = ({
  className,
  children,
  small,
}: ContainerProps) => (
  <div
    className={cn(
      'container mx-auto p-6',
      small && 'max-w-[900px]',
      className,
    )}>
    {children}
  </div>
);
