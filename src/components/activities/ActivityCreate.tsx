import { FC } from 'react';
import { required, TextInput } from 'react-admin';
import { TextArrayInput } from '../inputs/TextArrayInput';
import { CreateForm } from '../forms/CreateForm';

export const ActivityCreate: FC = () => (
  <CreateForm>
    <TextInput source="title" validate={[required()]} fullWidth />
    <TextArrayInput source="instructions" />
  </CreateForm>
);
