import { FC } from 'react';
import {
  AutocompleteInput,
  Datagrid,
  DateField,
  FunctionField,
  List,
  RaRecord,
  ReferenceInput,
  TextField,
} from 'react-admin';
import { ListActions } from '../ListActions';

const filters = [
  <ReferenceInput
    key="program"
    source="programId"
    reference="programs"
    alwaysOn>
    <AutocompleteInput label="Program" optionText="title" />
  </ReferenceInput>,
];

export const WeekList: FC = () => (
  <List
    actions={<ListActions />}
    perPage={25}
    filters={filters}
    queryOptions={{ meta: { include: { phase: true } } }}>
    <Datagrid rowClick="edit">
      <TextField source="weekNumber" />
      <FunctionField
        label="Phase"
        render={(record: RaRecord) => record.phase.name}
      />
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
