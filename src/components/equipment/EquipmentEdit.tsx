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

export const EquipmentEdit: FC = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = (data: RaRecord) => {
    notify('Equipment updated');
    redirect('list', 'equipment', data.id, data);
  };

  return (
    <Edit mutationOptions={{ onSuccess }} mutationMode="pessimistic">
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
      </SimpleForm>
    </Edit>
  );
};
