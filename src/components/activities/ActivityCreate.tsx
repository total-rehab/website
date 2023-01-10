import { FC } from 'react';
import {
  ArrayInput,
  Create,
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

export const ActivityCreate: FC = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = (data: RaRecord) => {
    notify('Activity created');
    redirect('list', 'activities', data.id, data);
  };

  return (
    <Create mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} fullWidth />
        <ArrayInput source="instructions">
          <SimpleFormIterator>
            <TextInput source="" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
