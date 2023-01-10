import { FC } from 'react';
import { Datagrid, List, TextField } from 'react-admin';
import { ListActions } from '../ListActions';

export const ModalityList: FC = () => (
  <List actions={<ListActions />}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
    </Datagrid>
  </List>
);
