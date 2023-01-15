import { FC, ReactNode } from 'react';

type FlexRowProps = {
  children: ReactNode;
};

export const FlexRow: FC<FlexRowProps> = ({ children }: FlexRowProps) => (
  <div style={{ display: 'flex', width: '100%', gap: '20px' }}>{children}</div>
);
