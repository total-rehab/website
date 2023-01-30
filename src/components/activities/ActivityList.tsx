import { FC } from 'react';
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';
import { ListActions } from '../ListActions';

export const ActivityList: FC = () => (
  <List actions={<ListActions />} perPage={25}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ReferenceField
        sortable={false}
        source="modalityId"
        reference="modalities"
        sortBy="modality.name">
        <TextField source="name" sortable={false} />
      </ReferenceField>
      <DateField source="createdAt" textAlign="center" showTime />
      <DateField source="updatedAt" textAlign="center" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
