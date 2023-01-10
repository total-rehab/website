import { FC } from 'react';
import { Admin, Resource } from 'react-admin';
import { getDataProvider } from '../data-provider';
import { theme } from '../theme';
import { ModalityCreate } from './modalities/ModalityCreate';
import { ModalityEdit } from './modalities/ModalityEdit';
import { ModalityList } from './modalities/ModalityList';
import { EquipmentList } from './equipment/EquipmentList';
import { EquipmentCreate } from './equipment/EquipmentCreate';
import { EquipmentEdit } from './equipment/EquipmentEdit';
import { Layout } from './Layout';
import { ActivityList } from './activities/ActivityList';
import { ActivityCreate } from './activities/ActivityCreate';
import { ActivityEdit } from './activities/ActivityEdit';

const App: FC = () => (
  <Admin
    theme={theme}
    dataProvider={getDataProvider(
      process.env.API_BASE_URL ?? 'http://localhost:7000',
    )}
    layout={Layout}>
    <Resource
      name="activities"
      list={ActivityList}
      create={ActivityCreate}
      edit={ActivityEdit}
    />
    <Resource
      name="modalities"
      list={ModalityList}
      create={ModalityCreate}
      edit={ModalityEdit}
    />
    <Resource
      name="equipment"
      list={EquipmentList}
      create={EquipmentCreate}
      edit={EquipmentEdit}
    />
  </Admin>
);

export default App;
