import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

type FlexRowProps = {
  children: ReactNode;
};

export const FlexRow: FC<FlexRowProps> = ({ children }: FlexRowProps) => (
  <Box
    sx={{
      display: 'flex',
      flex: 1,
      width: '100%',
      gap: '20px',
      flexDirection: { xs: 'column', lg: 'row' },
    }}>
    {children}
  </Box>
);
