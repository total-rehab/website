import { FC, ReactNode } from 'react';
import cn from 'classnames';

type ProseProps = {
  className?: string;
  children?: ReactNode;
};

export const Prose: FC<ProseProps> = ({ className, children }: ProseProps) => (
  <div className={cn('prose lg:prose-xl max-w-none prose-h2:mb-6', className)}>
    {children}
  </div>
);
