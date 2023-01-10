import { FC } from 'react';
import { Admin, Resource } from 'react-admin';
import { getDataProvider } from '../data-provider';
import { theme } from '../theme';
import { ModalityCreate } from './events/ModalityCreate';
import { ModalityEdit } from './events/ModalityEdit';
import { ModalityList } from './events/ModalityList';
import { Layout } from './Layout';

const App: FC = () => (
  <Admin
    theme={theme}
    dataProvider={getDataProvider(
      process.env.API_BASE_URL ?? 'http://localhost:7000',
    )}
    layout={Layout}>
    <Resource
      name="modalities"
      list={ModalityList}
      create={ModalityCreate}
      edit={ModalityEdit}
    />
  </Admin>
);

export default App;
