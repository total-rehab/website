import { MediaLibraryInput } from '@jambff/ra-components';
import { FC } from 'react';
import { ReferenceArrayInput, required, TextInput } from 'react-admin';
import { AutocompleteArrayOfObjectsInput } from '../generic/AutocompleteArrayOfObjectsInput';

import { FlexRow } from '../generic/FlexRow';
import { EditorContent } from '../inputs/EditorContent';

export const GuideInputs: FC = () => (
  <>
    <TextInput source="title" validate={[required()]} fullWidth />
    <FlexRow>
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
    <FlexRow>
      <ReferenceArrayInput source="programs" reference="programs">
        <AutocompleteArrayOfObjectsInput
          fullWidth
          label="Programs"
          optionText="title"
        />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="phases" reference="phases">
        <AutocompleteArrayOfObjectsInput
          fullWidth
          label="Phases"
          optionText="name"
        />
      </ReferenceArrayInput>
    </FlexRow>
    <EditorContent source="content" fullWidth />
  </>
);
