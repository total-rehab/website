import { FC } from 'react';
import { Admin, Resource } from 'react-admin';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import DirectionsRun from '@mui/icons-material/DirectionsRun';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Category from '@mui/icons-material/Category';
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
import { ProgramList } from './programs/ProgramList';
import { ProgramCreate } from './programs/ProgramCreate';
import { ProgramEdit } from './programs/ProgramEdit';

const App: FC = () => (
  <Admin
    theme={theme}
    dataProvider={getDataProvider(
      process.env.API_BASE_URL ?? 'http://localhost:7000',
    )}
    layout={Layout}>
    <Resource
      name="programs"
      list={ProgramList}
      create={ProgramCreate}
      edit={ProgramEdit}
      icon={CalendarMonth}
    />
    <Resource
      name="activities"
      list={ActivityList}
      create={ActivityCreate}
      edit={ActivityEdit}
      icon={DirectionsRun}
    />
    <Resource
      name="modalities"
      list={ModalityList}
      create={ModalityCreate}
      edit={ModalityEdit}
      icon={Category}
    />
    <Resource
      name="equipment"
      list={EquipmentList}
      create={EquipmentCreate}
      edit={EquipmentEdit}
      icon={FitnessCenter}
    />
  </Admin>
);

export default App;
