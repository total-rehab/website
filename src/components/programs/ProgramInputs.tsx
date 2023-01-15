import { MediaLibraryInput, TextArrayInput } from '@jambff/ra-components';
import { FC } from 'react';
import { required, TextInput } from 'react-admin';
import { FlexRow } from '../generic/FlexRow';
import { EditorContent } from '../inputs/EditorContent';

export const ProgramInputs: FC = () => (
  <>
    <TextInput source="title" validate={[required()]} fullWidth />
    <FlexRow>
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
    <TextArrayInput source="features" addButtonText="Add feature" />
    <EditorContent source="content" fullWidth />
  </>
);
