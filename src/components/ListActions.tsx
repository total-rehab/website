import { FC } from 'react';
import { CreateButton, TopToolbar } from 'react-admin';

export const ListActions: FC = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);
