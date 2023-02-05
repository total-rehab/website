import { FC } from 'react';
import { CreateForm } from '@jambff/ra-components';
import { UserInputs } from './UserInputs';

export const UserCreate: FC = () => (
  <CreateForm>
    <UserInputs />
  </CreateForm>
);
