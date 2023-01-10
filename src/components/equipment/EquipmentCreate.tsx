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

export const EquipmentCreate: FC = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = (data: RaRecord) => {
    notify('Equipment created');
    redirect('list', 'equipment', data.id, data);
  };

  return (
    <Create mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
      </SimpleForm>
    </Create>
  );
};
