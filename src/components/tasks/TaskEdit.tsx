import { EditForm } from '@jambff/ra-components';
import { FC } from 'react';
import { TaskInputs } from './TaskInputs';

export const TaskEdit: FC = () => (
  <EditForm
    queryOptions={{ meta: { include: { week: ['program'] } } }}
    transform={(data) => {
      delete data.programId;

      return data;
    }}>
    <TaskInputs />
  </EditForm>
);
