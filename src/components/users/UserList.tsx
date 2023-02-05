import { FC } from 'react';
import { Datagrid, DateField, List, TextField, TopToolbar } from 'react-admin';

export const UserList: FC = () => (
  <List actions={<TopToolbar />} perPage={25}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="email" />
      <TextField source="role" />
      <DateField source="createdAt" textAlign="center" showTime />
      <DateField source="updatedAt" textAlign="center" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
