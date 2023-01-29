import { FC } from 'react';
import { Datagrid, DateField, List, TextField } from 'react-admin';
import { ListActions } from '../ListActions';

export const ModalityList: FC = () => (
  <List actions={<ListActions />} perPage={25}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
