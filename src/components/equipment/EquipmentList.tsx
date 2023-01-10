import { FC } from 'react';
import { Datagrid, DateField, List, TextField } from 'react-admin';
import { ListActions } from '../ListActions';

export const EquipmentList: FC = () => (
  <List actions={<ListActions />}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
