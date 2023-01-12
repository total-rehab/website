import { TextArrayInput } from '@jambff/ra-components';
import { FC } from 'react';
import { required, TextInput } from 'react-admin';
import { EditorContent } from '../inputs/EditorContent';

export const ProgramInputs: FC = () => (
  <>
    <TextInput source="title" validate={[required()]} fullWidth />
    <TextArrayInput source="features" addButtonText="Add feature" />
    <EditorContent source="content" fullWidth />
  </>
);
