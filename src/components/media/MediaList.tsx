import { MediaLibraryRecordImageField } from '@jambff/ra-components';
import { FC } from 'react';
import { Datagrid, DateField, List, TextField } from 'react-admin';

export const MediaList: FC = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <List actions={<></>}>
    <Datagrid rowClick="edit">
      <MediaLibraryRecordImageField />
      <TextField source="title" />
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
