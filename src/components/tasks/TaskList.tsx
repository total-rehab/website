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
  <List
    actions={<ListActions />}
    perPage={25}
    queryOptions={{
      meta: { include: { activity: true } },
    }}>
    <Datagrid rowClick="edit">
      <NumberField source="weekNumber" textAlign="center" />
      <FunctionField
        label="Activity"
        textAlign="center"
        render={(record: RaRecord) => record.activity.name}
      />
      <TextField source="reps" textAlign="center" />
      <NumberField source="sets" textAlign="center" />
      <DateField source="createdAt" textAlign="center" showTime />
      <DateField source="updatedAt" textAlign="center" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
