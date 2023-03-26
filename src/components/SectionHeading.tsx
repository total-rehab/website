import type { FC, ReactNode } from 'react';
import cn from 'classnames';

type SectionHeadingProps = {
  className?: string;
  children?: ReactNode;
};

export const SectionHeading: FC<SectionHeadingProps> = ({
  className,
  children,
}: SectionHeadingProps) => (
  <h2
    className={cn(
      'text-3xl sm:text-4xl md:text-5xl font-medium mb-8',
      className,
    )}>
    {children}
  </h2>
);
