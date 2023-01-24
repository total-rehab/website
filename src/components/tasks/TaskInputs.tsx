import { FC } from 'react';
import {
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  required,
  CheckboxGroupInput,
  FormDataConsumer,
} from 'react-admin';
import { FlexRow } from '../generic/FlexRow';

export const TaskInputs: FC = () => (
  <>
    <ReferenceInput label="Program" source="programId" reference="programs">
      <AutocompleteInput optionText="title" fullWidth validate={required()} />
    </ReferenceInput>
    <FormDataConsumer>
      {({ formData }) => {
        if (!formData.programId) {
          return null;
        }

        return (
          <>
            <ReferenceInput
              label="Week Number"
              source="weekId"
              reference="weeks"
              sort={{
                field: 'weekNumber',
                order: 'asc',
              }}
              queryOptions={{
                meta: { filter: { programId: formData.programId } },
              }}>
              <AutocompleteInput
                optionText="weekNumber"
                fullWidth
                validate={required()}
              />
            </ReferenceInput>
            <ReferenceInput
              label="Activity"
              source="modalityId"
              reference="modalities">
              <AutocompleteInput
                optionText="name"
                fullWidth
                validate={required()}
              />
            </ReferenceInput>
            <ReferenceInput
              label="Activity"
              source="activityId"
              reference="activities">
              <AutocompleteInput
                optionText="name"
                fullWidth
                validate={required()}
              />
            </ReferenceInput>
            <FlexRow>
              <NumberInput source="sets" />
              <TextInput source="reps" />
              <TextInput source="restPeriod" />
              <TextInput source="frequency" />
            </FlexRow>
            <CheckboxGroupInput
              source="days"
              validate={required()}
              choices={Array(7)
                .fill(null)
                .map((_, i) => ({
                  id: i,
                  name: `Day ${i + 1}`,
                }))}
            />
          </>
        );
      }}
    </FormDataConsumer>
  </>
);
