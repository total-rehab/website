import { FC } from 'react';
import { ArrayInput, ArrayInputProps, TextInput } from 'react-admin';
import { useTheme } from '@mui/material';
import { StepFormIterator } from './StepFormIterator';

type TextArrayInputProps = Omit<ArrayInputProps, 'children'>;

export const TextArrayInput: FC<TextArrayInputProps> = (
  props: TextArrayInputProps,
) => {
  const theme = useTheme();

  return (
    <ArrayInput {...props} sx={{ marginBottom: theme.spacing(4) }}>
      <StepFormIterator>
        <TextInput source="" />
      </StepFormIterator>
    </ArrayInput>
  );
};
