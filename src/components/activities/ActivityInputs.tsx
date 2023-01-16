import { MediaLibraryInput, TextArrayInput } from '@jambff/ra-components';
import { FC } from 'react';
import {
  AutocompleteArrayInput,
  ReferenceArrayInput,
  required,
  TextInput,
} from 'react-admin';
import { FlexRow } from '../generic/FlexRow';

export const ActivityInputs: FC = () => (
  <>
    <TextInput source="title" validate={[required()]} fullWidth />
    <FlexRow>
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
    <TextArrayInput source="instructions" />
    <ReferenceArrayInput source="equipment" reference="equipment">
      <AutocompleteArrayInput fullWidth label="Equipment" optionText="name" />
    </ReferenceArrayInput>
  </>
);
