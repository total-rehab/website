import { FC } from 'react';
import { required, TextInput } from 'react-admin';
import { EditForm } from '../forms/EditForm';
import { TextArrayInput } from '../inputs/TextArrayInput';

export const ProgramEdit: FC = () => (
  <EditForm>
    <TextInput source="title" validate={[required()]} fullWidth />
    <TextArrayInput source="features" />
  </EditForm>
);
