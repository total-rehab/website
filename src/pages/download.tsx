import { NextPage } from 'next';
import Image from 'next/image';
import { DownloadGuide } from '../components/website/DownloadGuide';
import { Page } from '../components/website/Page';

const DownloadPage: NextPage = () => (
  <Page
    title="Download Total Rehab App"
    description="We are available to download via the Google Play Store and iOS App Store"
    headerImage={
      <Image
        alt=""
        src="/images/squat-phone.png"
        width={240}
        height={547}
        sizes="240px"
      />
    }>
    <DownloadGuide />
  </Page>
);

export default DownloadPage;
