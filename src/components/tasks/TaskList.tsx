import { FC } from 'react';
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  NumberField,
  RaRecord,
  TextField,
} from 'react-admin';
import { ListActions } from '../ListActions';

export const TaskList: FC = () => (
  <List actions={<ListActions />} perPage={25}>
    <Datagrid rowClick="edit">
      <FunctionField
        label="Modality"
        textAlign="center"
        render={(record: RaRecord) => record.modality.name}
      />
      <FunctionField
        label="Activity"
        textAlign="center"
        render={(record: RaRecord) => record.activity.name}
      />
      <TextField source="reps" textAlign="center" />
      <NumberField source="sets" textAlign="center" />
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
