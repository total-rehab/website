import {
  MediaLibraryInput,
  TextArrayInput,
  StepFormIterator,
} from '@jambff/ra-components';
import { FC } from 'react';
import {
  ArrayInput,
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  required,
  SelectArrayInput,
  TextInput,
} from 'react-admin';

import { FlexRow } from '../generic/FlexRow';
import { EditorContent } from '../inputs/EditorContent';

const phaseValidation = (
  value: number,
  allValues: { phases: { phaseId: number }[] },
) => {
  const allPhaseIds = allValues.phases.map(({ phaseId }) => phaseId);
  const duplicatePhaseIds = allPhaseIds.filter(
    (item, index) => allPhaseIds.indexOf(item) !== index,
  );

  if (duplicatePhaseIds.includes(value)) {
    return 'A phase should only be used once per program';
  }

  return undefined;
};

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
        validate={[required()]}
        choices={[
          { id: 'LIGHT', name: 'Light' },
          { id: 'MODERATE', name: 'Moderate' },
          { id: 'INTENSIVE', name: 'Intensive' },
        ]}
      />
      <NumberInput source="minimumAge" />
    </FlexRow>
    <TextArrayInput source="features" addButtonText="Add feature" />
    <ArrayInput source="phases">
      <StepFormIterator inline addButtonText="Add phase">
        <ReferenceInput source="phaseId" reference="phases">
          <AutocompleteInput
            fullWidth
            label="Phase"
            optionText="name"
            validate={[required(), phaseValidation]}
          />
        </ReferenceInput>
        <NumberInput
          fullWidth
          source="durationInWeeks"
          validate={[required()]}
        />
      </StepFormIterator>
    </ArrayInput>
    <EditorContent source="content" fullWidth />
  </>
);
