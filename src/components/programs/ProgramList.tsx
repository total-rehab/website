import { FC } from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  FunctionField,
  List,
  RaRecord,
  TextField,
} from 'react-admin';
import { sentenceCase } from 'change-case';
import { Chip, useTheme } from '@mui/material';
import { ListActions } from '../ListActions';

export const ProgramList: FC = () => {
  const theme = useTheme();

  return (
    <List actions={<ListActions />} perPage={25}>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <BooleanField
          label="Over 60s"
          source="isForOver60s"
          textAlign="center"
        />
        <FunctionField
          label="Activity Levels"
          textAlign="center"
          render={(record: RaRecord) => (
            <Chip
              key={record.activityLevel}
              label={sentenceCase(record.activityLevel)}
              sx={{ margin: theme.spacing(0.5) }}
            />
          )}
        />
        <DateField source="createdAt" textAlign="center" showTime />
        <DateField source="updatedAt" textAlign="center" showTime />
        <TextField source="id" textAlign="center" />
      </Datagrid>
    </List>
  );
};
