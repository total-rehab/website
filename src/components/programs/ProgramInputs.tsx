import { Box } from '@mui/material';
import { MediaLibraryInput, TextArrayInput } from '@jambff/ra-components';
import { FC } from 'react';
import {
  Datagrid,
  NumberInput,
  ReferenceManyField,
  required,
  SelectArrayInput,
  TextField,
  TextInput,
} from 'react-admin';
import { FlexRow } from '../generic/FlexRow';
import { EditorContent } from '../inputs/EditorContent';

export const ProgramItems = () => (
  <ReferenceManyField reference="programItems" target="author_id">
    <Datagrid>
      <TextField source="title" />
      <TextField source="year" />
    </Datagrid>
  </ReferenceManyField>
);

export const ProgramInputs: FC = () => (
  <>
    <TextInput source="title" validate={[required()]} fullWidth />
    <FlexRow>
      <MediaLibraryInput source="heroImageId" label="Hero Image" />
      <MediaLibraryInput source="thumbnailImageId" label="Thumbnail Image" />
    </FlexRow>
    <FlexRow>
      <SelectArrayInput
        source="activityLevels"
        choices={[
          { id: 'LIGHT', name: 'Light' },
          { id: 'MODERATE', name: 'Moderate' },
          { id: 'INTENSIVE', name: 'Intensive' },
        ]}
      />
      <NumberInput source="minimumAge" />
      <NumberInput source="maximumAge" />
    </FlexRow>
    <EditorContent source="content" fullWidth />
    <TextArrayInput source="features" addButtonText="Add feature" />
  </>
);
