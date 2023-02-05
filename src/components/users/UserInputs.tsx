import { FC } from 'react';
import {
  required,
  SelectInput,
  useGetIdentity,
  useRecordContext,
} from 'react-admin';
import { Typography } from '@mui/material';

export const UserInputs: FC = () => {
  const record = useRecordContext();
  const { identity } = useGetIdentity();
  const isCurrentUser = record.guid === identity?.id;
  const roleMsg = isCurrentUser ? 'You cannot update your own role' : undefined;

  return (
    <SelectInput
      source="role"
      validate={[required(), () => roleMsg]}
      disabled={isCurrentUser}
      helperText={roleMsg}
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
};
