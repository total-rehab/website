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
import { sentenceCase } from 'change-case';
import { Chip, useTheme } from '@mui/material';
import { ListActions } from '../ListActions';

export const ProgramList: FC = () => {
  const theme = useTheme();

  return (
    <List actions={<ListActions />} perPage={25}>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <NumberField source="minimumAge" textAlign="center" />
        <NumberField source="maximumAge" textAlign="center" />
        <FunctionField
          label="Activity Levels"
          textAlign="center"
          render={(record: RaRecord) =>
            record.activityLevels.map((activityLevel: string) => (
              <Chip
                key={activityLevel}
                label={sentenceCase(activityLevel)}
                sx={{ margin: theme.spacing(0.5) }}
              />
            ))
          }
        />
        <DateField source="createdAt" textAlign="center" showTime />
        <DateField source="updatedAt" textAlign="center" showTime />
        <TextField source="id" textAlign="center" />
      </Datagrid>
    </List>
  );
};
