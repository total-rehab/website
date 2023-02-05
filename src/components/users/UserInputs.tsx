import { FC } from 'react';
import { required, SelectInput, TextField } from 'react-admin';
import { Typography } from '@mui/material';

export const UserInputs: FC = () => (
  <SelectInput
    source="role"
    validate={required()}
    choices={[
      {
        id: 'ADMIN',
        name: 'Admin',
      },
      {
        id: 'PRACTITIONER',
        name: 'Editor',
      },
      {
        id: 'USER',
        name: 'User',
      },
    ]}
  />
);
