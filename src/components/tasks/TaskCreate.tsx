import { CreateForm } from '@jambff/ra-components';
import { FC } from 'react';
import { TaskInputs } from './TaskInputs';

export const TaskCreate: FC = () => (
  <CreateForm
    transform={(data) => {
      delete data.programId;

      return data;
    }}>
    <TaskInputs />
  </CreateForm>
);
