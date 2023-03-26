import { NextPage } from 'next';
import ExportedImage from 'next-image-export-optimizer';
import { DownloadGuide } from '../components/DownloadGuide';
import { Page } from '../components/Page';

const DownloadPage: NextPage = () => (
  <Page
    title="Download Total Rehab App"
    description="We are available to download via the Google Play Store and iOS App Store"
    headerImage={
      <ExportedImage
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
