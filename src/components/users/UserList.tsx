import { FC } from 'react';
import { Datagrid, DateField, List, TextField } from 'react-admin';
import { ListActions } from '../ListActions';

export const UserList: FC = () => (
  <List actions={<ListActions />} perPage={25}>
    <Datagrid rowClick="edit">
      <TextField source="email" sortable={false} />
      <DateField
        source="createdAt"
        textAlign="center"
        showTime
        sortable={false}
      />
      <DateField
        source="updatedAt"
        textAlign="center"
        showTime
        sortable={false}
      />
      <TextField source="id" textAlign="center" sortable={false} />
    </Datagrid>
  </List>
);
