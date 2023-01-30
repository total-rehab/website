import { FC } from 'react';
import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';
import { EntityField } from '../generic/EntityField';
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
      <EntityField
        source="activityId"
        reference="activities"
        itemSource="name"
      />
      <TextField source="reps" textAlign="center" />
      <NumberField source="sets" textAlign="center" />
      <DateField source="createdAt" textAlign="center" showTime />
      <DateField source="updatedAt" textAlign="center" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
