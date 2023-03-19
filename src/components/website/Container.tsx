import { FC, ReactNode } from 'react';
import cn from 'classnames';

type ContainerProps = {
  className?: string;
  children?: ReactNode;
};

export const Container: FC<ContainerProps> = ({
  className,
  children,
}: ContainerProps) => (
  <div className={cn('container mx-auto p-6', className)}>{children}</div>
);
