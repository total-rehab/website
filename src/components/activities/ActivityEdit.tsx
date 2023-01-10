import { FC } from 'react';
import {
  ArrayInput,
  Edit,
  RaRecord,
  required,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useNotify,
  useRedirect,
} from 'react-admin';

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
        <ArrayInput source="instructions">
          <SimpleFormIterator>
            <TextInput source="" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};
