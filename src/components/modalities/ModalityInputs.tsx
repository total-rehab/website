import { MediaLibraryInput } from '@jambff/ra-components';
import { FC } from 'react';
import { required, TextInput } from 'react-admin';
import { FlexRow } from '../generic/FlexRow';

export const ModalityInputs: FC = () => (
  <>
    <TextInput source="name" validate={[required()]} fullWidth />
    <TextInput source="description" fullWidth />
    <FlexRow>
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
  </>
);
