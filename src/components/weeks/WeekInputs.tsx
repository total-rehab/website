import { FC } from 'react';
import {
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  required,
} from 'react-admin';

export const WeekInputs: FC = () => (
  <>
    <ReferenceInput label="Program" source="programId" reference="programs">
      <AutocompleteInput optionText="title" fullWidth validate={required()} />
    </ReferenceInput>
    <ReferenceInput label="Phase" source="phaseId" reference="phases">
      <AutocompleteInput optionText="name" fullWidth validate={required()} />
    </ReferenceInput>
    <NumberInput source="weekNumber" />
  </>
);
