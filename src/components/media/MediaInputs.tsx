import { FC } from 'react';
import { ImageField, required, TextInput } from 'react-admin';

export const MediaInputs: FC = () => (
  <>
    <TextInput source="title" fullWidth validate={[required()]} />
    <ImageField source="src" title="title" />
  </>
);
