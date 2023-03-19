import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../components/website/Header';
import { Page } from '../components/website/Page';

const TITLE = 'Download Total Rehab App';
const DESCRIPTION =
  'We are available to download via the Google Play Store and iOS App Store';

const DownloadPage: NextPage = () => (
  <Page
    meta={{
      title: TITLE,
      description: DESCRIPTION,
    }}>
    <main>
      <Header
        title={TITLE}
        description={DESCRIPTION}
        image={
          <div className="w-[240px]">
            <Image
              alt=""
              src="/images/squat-phone.png"
              width={1080}
              height={2458}
              sizes="240px"
            />
          </div>
        }
      />
    </main>
  </Page>
);

export default DownloadPage;
