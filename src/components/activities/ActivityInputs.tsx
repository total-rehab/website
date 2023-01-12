import { TextArrayInput } from '@jambff/ra-components';
import { FC } from 'react';
import { required, TextInput } from 'react-admin';

export const ActivityInputs: FC = () => (
  <>
    <TextInput source="title" validate={[required()]} fullWidth />
    <TextArrayInput source="instructions" />
  </>
);
