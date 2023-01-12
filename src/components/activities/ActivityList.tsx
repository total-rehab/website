import { FC } from 'react';
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  RaRecord,
  TextField,
} from 'react-admin';
import TrueIcon from '@mui/icons-material/Done';
import FalseIcon from '@mui/icons-material/Clear';
import { ListActions } from '../ListActions';

export const ActivityList: FC = () => (
  <List actions={<ListActions />}>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
      <TextField source="id" textAlign="center" />
    </Datagrid>
  </List>
);
