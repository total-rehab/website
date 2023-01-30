import { FC } from 'react';
import { ReferenceField, TextField } from 'react-admin';

type EntityFieldProps = {
  source: string;
  reference: string;
  itemSource: string;
};

export const EntityField: FC<EntityFieldProps> = ({
  source,
  reference,
  itemSource,
}: EntityFieldProps) => (
  <ReferenceField source={source} reference={reference}>
    <TextField source={itemSource} />
  </ReferenceField>
);
