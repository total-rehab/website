import { MediaLibraryInput, TextArrayInput } from '@jambff/ra-components';
import { FC } from 'react';
import { ReferenceArrayInput, required, TextInput } from 'react-admin';
import { AutocompleteArrayOfObjectsInput } from '../generic/AutocompleteArrayOfObjectsInput';
import { FlexRow } from '../generic/FlexRow';

export const ActivityInputs: FC = () => (
  <>
    <TextInput source="name" validate={[required()]} fullWidth />
    <FlexRow>
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
    <TextArrayInput source="instructions" />
    <ReferenceArrayInput source="equipment" reference="equipment">
      <AutocompleteArrayOfObjectsInput
        fullWidth
        label="Equipment"
        optionText="name"
      />
    </ReferenceArrayInput>
  </>
);
