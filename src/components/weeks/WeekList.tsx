import { FC } from 'react';
import {
  AutocompleteInput,
  Datagrid,
  DateField,
  FilterList,
  FilterListItem,
  FunctionField,
  List,
  RaRecord,
  ReferenceInput,
  TextField,
} from 'react-admin';
import { Card, CardContent } from '@mui/material';
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
  <List actions={<ListActions />} perPage={25} filters={filters}>
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
