import { FC } from 'react';
import { required, TextInput } from 'react-admin';
import { EditForm } from '../forms/EditForm';

export const EquipmentEdit: FC = () => (
  <EditForm>
    <TextInput source="name" validate={[required()]} fullWidth />
  </EditForm>
);
