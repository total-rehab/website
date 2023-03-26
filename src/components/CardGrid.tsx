import type { FC, ReactNode } from 'react';

type CardGridProps = {
  children: ReactNode;
};

export const CardGrid: FC<CardGridProps> = ({ children }: CardGridProps) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
    {children}
  </div>
);
