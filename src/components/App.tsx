import { FC } from 'react';
import { Admin, CustomRoutes, Resource } from 'react-admin';
import { LoginPage, createAuthProvider } from '@jambff/ra-supabase-next-auth';
import { Route } from 'react-router-dom';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import DirectionsRun from '@mui/icons-material/DirectionsRun';
import CheckCircle from '@mui/icons-material/CheckCircle';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import Summarize from '@mui/icons-material/Summarize';
import Image from '@mui/icons-material/Image';
import QuestionMark from '@mui/icons-material/QuestionMark';
import People from '@mui/icons-material/People';
import Category from '@mui/icons-material/Category';
import { FormProvider, MediaLibraryProvider } from '@jambff/ra-components';
import { User } from '@supabase/supabase-js';
import { createAuthenticatedFetch } from '@jambff/supabase-auth-fetch';
import {
  createDataProvider,
  isDataProviderError,
} from '@jambff/ra-data-provider';
import { sentenceCase } from 'change-case';
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
import { ProgramShow } from './programs/ProgramShow';
import { createSupabaseClient } from '../supabase';
import { SECONDARY_COLOR, theme } from '../theme';
import { MediaList } from './media/MediaList';
import { MediaCreate } from './media/MediaCreate';
import { MediaEdit } from './media/MediaEdit';
import { TaskList } from './tasks/TaskList';
import { TaskCreate } from './tasks/TaskCreate';
import { TaskEdit } from './tasks/TaskEdit';
import { UserList } from './users/UserList';
import { UserEdit } from './users/UserEdit';
import { GuideList } from './guides/GuideList';
import { GuideCreate } from './guides/GuideCreate';
import { GuideEdit } from './guides/GuideEdit';
import { UserCreate } from './users/UserCreate';
import { TaskBulkCreate } from './tasks/TaskBulkCreate';

const supabase = createSupabaseClient();
const fetch = createAuthenticatedFetch(supabase);
const dataProvider = createDataProvider(
  process.env.API_BASE_URL ?? 'http://localhost:7000',
  { fetch },
);

const authProvider = createAuthProvider(supabase, {
  acceptedRoles: ['ADMIN'],
  getIdentity: async (supabaseUser: User) => {
    const { data, error } = await supabase
      .from('User')
      .select('name, role')
      .eq('guid', supabaseUser.id);

    const { name, role } = data?.[0] ?? {};
    const { id, email } = supabaseUser;

    return {
      id,
      fullName: name ?? email,
      email,
      role,
    };
  },
});

const MEDIA_LIBRARY_BUCKET = 'images';
const MEDIA_LIBRARY_BUCKET_FOLDER = 'public';

const onFormError = async (error: unknown): Promise<Record<string, string>> => {
  const formErrors: Record<string, string> = {};

  if (!isDataProviderError(error)) {
    throw error;
  }

  if (!error.errors) {
    return formErrors;
  }

  return error.errors.reduce(
    (acc, err) => ({
      ...acc,
      [err.property]: sentenceCase(err.message),
    }),
    formErrors,
  );
};

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
    <FormProvider onError={onFormError}>
      <Admin
        basename="/admin"
        theme={theme}
        dataProvider={dataProvider}
        authProvider={authProvider}
        layout={Layout}
        loginPage={<LoginPage background={SECONDARY_COLOR} />}>
        <Resource
          name="programs"
          list={ProgramList}
          create={ProgramCreate}
          edit={ProgramEdit}
          show={ProgramShow}
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
        <Resource
          name="guides"
          list={GuideList}
          create={GuideCreate}
          edit={GuideEdit}
          icon={QuestionMark}
        />
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          icon={People}
        />
        <CustomRoutes>
          <Route path="bulk-create/tasks" element={<TaskBulkCreate />} />
        </CustomRoutes>
      </Admin>
    </FormProvider>
  </MediaLibraryProvider>
);

export default App;
