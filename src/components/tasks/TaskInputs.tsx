import { sentenceCase } from 'change-case';
import { FC } from 'react';
import {
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  required,
  CheckboxGroupInput,
  RaRecord,
} from 'react-admin';
import { FlexRow } from '../generic/FlexRow';

export const TaskInputs: FC = () => (
  <>
    <ReferenceInput label="Program" source="programId" reference="programs">
      <AutocompleteInput
        optionText={(record: RaRecord) =>
          `${record.title} - ${
            record.isForOver60s ? 'Over 60s' : 'Under 60s'
          } - ${sentenceCase(record.activityLevel)}`
        }
        fullWidth
        validate={required()}
      />
    </ReferenceInput>
    <ReferenceInput label="Activity" source="activityId" reference="activities">
      <AutocompleteInput optionText="name" fullWidth validate={required()} />
    </ReferenceInput>
    <FlexRow>
      <NumberInput source="sets" />
      <TextInput source="reps" />
      <TextInput source="restPeriod" />
      <TextInput source="frequency" />
    </FlexRow>
    <NumberInput source="weekNumber" validate={required()} fullWidth />
    <CheckboxGroupInput
      source="days"
      validate={required()}
      parse={(values: number[]) =>
        values.filter((n) => [1, 2, 3, 4, 5, 6, 7].includes(n))
      }
      choices={Array(7)
        .fill(null)
        .map((_, i) => ({
          id: i + 1,
          name: `Day ${i + 1}`,
        }))}
    />
  </>
);
