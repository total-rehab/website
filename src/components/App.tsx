import { FC } from 'react';
import { Admin, Resource } from 'react-admin';
import { LoginPage, createAuthProvider } from '@jambff/ra-supabase-next-auth';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import DirectionsRun from '@mui/icons-material/DirectionsRun';
import CheckCircle from '@mui/icons-material/CheckCircle';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import Summarize from '@mui/icons-material/Summarize';
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
import { TaskList } from './tasks/TaskList';
import { TaskCreate } from './tasks/TaskCreate';
import { TaskEdit } from './tasks/TaskEdit';

const supabase = createSupabaseClient();
const authProvider = createAuthProvider(supabase);

const MEDIA_LIBRARY_BUCKET = 'images';
const MEDIA_LIBRARY_BUCKET_FOLDER = 'public';

const App: FC = () => (
  <MediaLibraryProvider
    croppable
    convertFileName
    supabase={supabase}
    resource="media"
    bucket={MEDIA_LIBRARY_BUCKET}
    bucketFolder={MEDIA_LIBRARY_BUCKET_FOLDER}
    accept={['image/*', 'video/*']}
    maxSize={50000000}
    aspectRatio="3 / 2"
    sort={{
      field: 'createdAt',
      order: 'desc',
    }}
    resizeOptions={{
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
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
        icon={Summarize}
      />
      <Resource
        name="tasks"
        list={TaskList}
        create={TaskCreate}
        edit={TaskEdit}
        icon={CheckCircle}
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
        name="phases"
        list={TaxonomyList}
        create={TaxonomyCreate}
        edit={TaxonomyEdit}
        icon={CalendarViewWeekIcon}
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
