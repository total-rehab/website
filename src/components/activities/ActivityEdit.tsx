import { FC } from 'react';
import {
  Edit,
  RaRecord,
  required,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from 'react-admin';
import { TextArrayInput } from '../inputs/TextArrayInput';

export const ActivityEdit: FC = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = (data: RaRecord) => {
    notify('Activity updated');
    redirect('list', 'activities', data.id, data);
  };

  return (
    <Edit mutationOptions={{ onSuccess }} mutationMode="pessimistic">
      <SimpleForm>
        <TextInput source="title" validate={[required()]} fullWidth />
        <TextArrayInput source="instructions" />
      </SimpleForm>
    </Edit>
  );
};
