import { FC, ReactNode } from 'react';
import { singular } from 'pluralize';
import { capitalCase } from 'change-case';
import {
  Edit,
  EditProps,
  RaRecord,
  SimpleForm,
  useNotify,
  useRedirect,
} from 'react-admin';

type EditFormProps = Omit<EditProps, 'resource'> & {
  children: ReactNode;
};

export const EditForm: FC<EditFormProps> = ({
  children,
  ...restProps
}: EditFormProps) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = (data: RaRecord, { resource }: { resource?: string }) => {
    if (!resource) {
      throw new Error('No resource found');
    }

    notify(`${capitalCase(singular(resource))} updated`);
    redirect('list', resource, data.id, data);
  };

  return (
    <Edit
      mutationOptions={{ onSuccess }}
      mutationMode="pessimistic"
      {...restProps}>
      <SimpleForm>{children}</SimpleForm>
    </Edit>
  );
};
