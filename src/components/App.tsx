import { FC } from 'react';
import { Admin, Resource } from 'react-admin';
import { LoginPage, createAuthProvider } from '@jambff/ra-supabase-next-auth';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import DirectionsRun from '@mui/icons-material/DirectionsRun';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Image from '@mui/icons-material/Image';
import Category from '@mui/icons-material/Category';
import { MediaLibraryProvider } from '@jambff/ra-components';
import { getDataProvider } from '../data-provider';
import { TaxonomyCreate } from './taxonomies/TaxonomyCreate';
import { TaxonomyEdit } from './taxonomies/TaxonomyEdit';
import { TaxonomyList } from './taxonomies/TaxonomyList';
import { Layout } from './Layout';
import { ActivityList } from './activities/ActivityList';
import { ActivityCreate } from './activities/ActivityCreate';
import { ActivityEdit } from './activities/ActivityEdit';
import { ProgramList } from './programs/ProgramList';
import { ProgramCreate } from './programs/ProgramCreate';
import { ProgramEdit } from './programs/ProgramEdit';
import { createSupabaseClient } from '../supabase';
import { SECONDARY_COLOR, theme } from '../theme';
import { MediaList } from './media/MediaList';
import { MediaCreate } from './media/MediaCreate';
import { MediaEdit } from './media/MediaEdit';

const supabase = createSupabaseClient();
const authProvider = createAuthProvider(supabase);

const App: FC = () => (
  <MediaLibraryProvider
    supabase={supabase}
    resource="media"
    bucket="images"
    bucketFolder="public"
    accept="image/*"
    maxSize={2000000}
    aspectRatio="3 / 2"
    sort={{
      field: 'createdAt',
      order: 'desc',
    }}>
    <Admin
      theme={theme}
      dataProvider={getDataProvider(
        process.env.API_BASE_URL ?? 'http://localhost:7000',
        supabase,
      )}
      authProvider={authProvider}
      layout={Layout}
      loginPage={<LoginPage background={SECONDARY_COLOR} />}>
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
        list={TaxonomyList}
        create={TaxonomyCreate}
        edit={TaxonomyEdit}
        icon={Category}
      />
      <Resource
        name="equipment"
        list={TaxonomyList}
        create={TaxonomyCreate}
        edit={TaxonomyEdit}
        icon={FitnessCenter}
      />
      <Resource
        name="media"
        options={{ label: 'Media Library' }}
        list={MediaList}
        create={MediaCreate}
        edit={MediaEdit}
        icon={Image}
      />
    </Admin>
  </MediaLibraryProvider>
);

export default App;
