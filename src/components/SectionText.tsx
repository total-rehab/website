import type { FC, ReactNode } from 'react';
import cn from 'classnames';

type SectionTextProps = {
  className?: string;
  children?: ReactNode;
};

export const SectionText: FC<SectionTextProps> = ({
  className,
  children,
}: SectionTextProps) => (
  <div
    className={cn(
      'text-lg md:text-xl lg:text-2xl tracking-wide md:tracking-wide lg:tracking-wide space-y-8',
      className,
    )}>
    {children}
  </div>
);
