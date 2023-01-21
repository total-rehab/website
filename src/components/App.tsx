import { FC } from 'react';
import { Admin, Resource } from 'react-admin';
import { LoginPage, createAuthProvider } from '@jambff/ra-supabase-next-auth';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import DirectionsRun from '@mui/icons-material/DirectionsRun';
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

const supabase = createSupabaseClient();
const authProvider = createAuthProvider(supabase);

const MEDIA_LIBRARY_BUCKET = 'images';
const MEDIA_LIBRARY_BUCKET_FOLDER = 'public';

const parseImageUrl = (url: string) => {
  const { pathname } = new URL(url);
  const fileName = pathname.split('/').pop();

  return new URL(
    `/${MEDIA_LIBRARY_BUCKET}/${MEDIA_LIBRARY_BUCKET_FOLDER}/${fileName}`,
    process.env.IMAGE_RESIZER_BASE_URL,
  ).href;
};

const formatImageUrl = (
  url: string,
  displayWidth: number = 300,
  crop: number[] | null = null,
) => {
  const urlObject = new URL(url);

  urlObject.searchParams.set('w', String(displayWidth));

  if (crop) {
    urlObject.search = `${urlObject.search}&crop=${crop
      .map((value) => `${value}px`)
      .join(',')}`;
  }

  return urlObject.href;
};

const App: FC = () => (
  <MediaLibraryProvider
    croppable
    convertFileName
    supabase={supabase}
    resource="media"
    bucket={MEDIA_LIBRARY_BUCKET}
    bucketFolder={MEDIA_LIBRARY_BUCKET_FOLDER}
    accept="image/*"
    maxSize={10000000}
    aspectRatio="3 / 2"
    formatImageUrl={formatImageUrl}
    parseImageUrl={parseImageUrl}
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
