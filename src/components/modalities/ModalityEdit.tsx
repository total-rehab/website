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

export const ModalityEdit: FC = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = (data: RaRecord) => {
    notify('Modality updated');
    redirect('list', 'modalities', data.id, data);
  };

  return (
    <Edit mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
      </SimpleForm>
    </Edit>
  );
};
