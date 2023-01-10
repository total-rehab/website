import { FC } from 'react';
import {
  Create,
  RaRecord,
  required,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from 'react-admin';
import { useTheme } from '@mui/material';
import { TextArrayInput } from '../inputs/TextArrayInput';

export const ActivityCreate: FC = () => {
  const notify = useNotify();
  const redirect = useRedirect();
  const theme = useTheme();

  const onSuccess = (data: RaRecord) => {
    notify('Activity created');
    redirect('list', 'activities', data.id, data);
  };

  return (
    <Create mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} fullWidth />
        <TextArrayInput source="instructions" />
      </SimpleForm>
    </Create>
  );
};
