import { NextPage } from 'next';
import Image from 'next/image';
import { Page } from '../components/website/Page';

const DownloadPage: NextPage = () => (
  <Page
    title="Download Total Rehab App"
    description="We are available to download via the Google Play Store and iOS App Store"
    headerImage={
      <div className="w-[240px]">
        <Image
          alt=""
          src="/images/squat-phone.png"
          width={1080}
          height={2458}
          sizes="240px"
        />
      </div>
    }>
    {null}
  </Page>
);

export default DownloadPage;
