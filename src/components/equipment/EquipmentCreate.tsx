import { FC } from 'react';
import { required, TextInput } from 'react-admin';
import { CreateForm } from '../forms/CreateForm';

export const EquipmentCreate: FC = () => (
  <CreateForm>
    <TextInput source="name" validate={[required()]} fullWidth />
  </CreateForm>
);
