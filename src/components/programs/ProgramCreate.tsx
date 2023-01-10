import { FC } from 'react';
import { required, TextInput } from 'react-admin';
import { CreateForm } from '../forms/CreateForm';
import { EditorContent } from '../inputs/EditorContent';
import { TextArrayInput } from '../inputs/TextArrayInput';

export const ProgramCreate: FC = () => {
  return (
    <CreateForm>
      <TextInput source="title" validate={[required()]} fullWidth />
      <TextArrayInput source="features" addButtonText="Add feature" />
      <EditorContent source="content" fullWidth />
    </CreateForm>
  );
};
