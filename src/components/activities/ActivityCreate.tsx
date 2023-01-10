import { FC } from 'react';
import {
  ArrayInput,
  Create,
  FunctionField,
  ImageField,
  ImageInput,
  RaRecord,
  required,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useNotify,
  useRedirect,
} from 'react-admin';
import { useTheme, Button } from '@mui/material';
import { StepFormIterator } from '../inputs/StepFormIterator';

export const ActivityCreate: FC = () => {
  const notify = useNotify();
  const redirect = useRedirect();
  const theme = useTheme();

  const onSuccess = (data: RaRecord) => {
    notify('Activity created');
    redirect('list', 'activities', data.id, data);
  };

  console.log(theme.palette.grey[50]);

  return (
    <Create mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} fullWidth />
        <ArrayInput source="instructions">
          <StepFormIterator>
            <TextInput source="" />
          </StepFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
