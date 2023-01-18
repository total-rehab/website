import { FC } from 'react';
import { Datagrid, DateField, ImageField, List, TextField } from 'react-admin';
import { ListActions } from '../ListActions';

export const MediaList: FC = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <List actions={<></>}>
    <Datagrid rowClick="edit">
      <ImageField source="src" title="title" label="" />
      <TextField source="title" />
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
