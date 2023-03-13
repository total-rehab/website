import { FC, useCallback, useState } from 'react';
import {
  Datagrid,
  DeleteButton,
  EditButton,
  FunctionField,
  List,
  NumberField,
  RaRecord,
  ResourceContextProvider,
  TextField,
  useNotify,
  useRefresh,
} from 'react-admin';
import { useTheme, Divider } from '@mui/material';
import { useFormContext } from '@jambff/ra-components/dist/forms/FormProvider';
import { EntityField } from '../generic/EntityField';
import { TaskCreate } from './TaskCreate';

export const TaskBulkCreate: FC = () => {
  const { spacing } = useTheme();
  const notify = useNotify();
  const refresh = useRefresh();
  const [selectedProgramId, setSelectedProgramId] = useState<number>();
  const [selectedWeekNumber, setSelectedWeekNumber] = useState<number>();
  const { onError } = useFormContext();

  const onSuccess = useCallback(() => {
    notify('Task created');
    refresh();
  }, [notify, refresh]);

  return (
    <ResourceContextProvider value="tasks">
      <TaskCreate
        mutationOptions={{ onSuccess, onError }}
        onProgramIdChange={setSelectedProgramId}
        onWeekChange={setSelectedWeekNumber}>
        {selectedProgramId && (
          <List
            perPage={50}
            filter={{
              programId: selectedProgramId,
              weekNumber: selectedWeekNumber,
            }}
            actions={false}
            sx={{ width: '100%' }}>
            <Datagrid rowClick="edit" bulkActionButtons={false}>
              <NumberField source="weekNumber" textAlign="center" />
              <EntityField
                source="activityId"
                reference="activities"
                itemSource="name"
              />
              <TextField source="reps" textAlign="center" />
              <NumberField source="sets" textAlign="center" />
              <FunctionField
                label="Days"
                textAlign="center"
                render={(record: RaRecord) => record.days.sort().join()}
              />{' '}
              <DeleteButton redirect={false} />
            </Datagrid>
          </List>
        )}
        <Divider light sx={{ marginBottom: spacing(2) }} />
      </TaskCreate>
    </ResourceContextProvider>
  );
};
