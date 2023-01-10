import { FC } from 'react';
import {
  ArrayInput,
  Edit,
  RaRecord,
  required,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from 'react-admin';
import { StepFormIterator } from '../inputs/StepFormIterator';

export const ActivityEdit: FC = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = (data: RaRecord) => {
    notify('Activity updated');
    redirect('list', 'activities', data.id, data);
  };

  return (
    <Edit mutationOptions={{ onSuccess }} mutationMode="pessimistic">
      <SimpleForm>
        <TextInput source="title" validate={[required()]} fullWidth />
        <ArrayInput source="instructions">
          <StepFormIterator>
            <TextInput source="" />
          </StepFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};
