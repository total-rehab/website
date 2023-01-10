import { FC } from 'react';
import { ArrayInput, ArrayInputProps, TextInput } from 'react-admin';
import { StepFormIterator } from './StepFormIterator';

type TextArrayInputProps = Omit<ArrayInputProps, 'children'>;

export const TextArrayInput: FC<TextArrayInputProps> = (
  props: TextArrayInputProps,
) => (
  <ArrayInput {...props}>
    <StepFormIterator>
      <TextInput source="" />
    </StepFormIterator>
  </ArrayInput>
);
