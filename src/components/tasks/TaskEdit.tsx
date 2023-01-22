import { EditForm } from '@jambff/ra-components';
import { FC } from 'react';
import { TaskInputs } from './TaskInputs';

export const TaskEdit: FC = () => (
  <EditForm
    transform={(data) => {
      delete data.programId;

      return data;
    }}>
    <TaskInputs />
  </EditForm>
);
