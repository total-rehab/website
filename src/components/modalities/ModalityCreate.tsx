import { CreateForm } from '@jambff/ra-components';
import { FC } from 'react';
import { ModalityInputs } from './ModalityInputs';

export const ModalityCreate: FC = () => (
  <CreateForm>
    <ModalityInputs />
  </CreateForm>
);
