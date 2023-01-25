import { FC } from 'react';
import {
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  required,
  CheckboxGroupInput,
  FormDataConsumer,
  useRecordContext,
} from 'react-admin';
import { Typography, useTheme } from '@mui/material';
import { FlexRow } from '../generic/FlexRow';

export const TaskInputs: FC = () => {
  const record = useRecordContext();
  const theme = useTheme();
  const { program } = record?.week ?? {};

  return (
    <>
      {program ? (
        <Typography sx={{ marginBottom: theme.spacing(2) }}>
          Program: {record.week.program.title}
        </Typography>
      ) : (
        <ReferenceInput label="Program" source="programId" reference="programs">
          <AutocompleteInput
            optionText="title"
            fullWidth
            validate={required()}
          />
        </ReferenceInput>
      )}
      <FormDataConsumer>
        {({ formData }) => {
          const programId = program?.id ?? formData.programId;

          if (!programId) {
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
                  meta: { filter: { programId } },
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
        }}
      </FormDataConsumer>
    </>
  );
};
