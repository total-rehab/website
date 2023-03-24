import { NextPage } from 'next';
import Image from 'next/image';
import { DownloadGuide } from '../components/website/DownloadGuide';
import { Page } from '../components/website/Page';
import { UkcaBar } from '../components/website/UkcaBar';

const ProgramsPage: NextPage = () => (
  <Page
    title="Sports Injury and Post-Surgery Rehab Programs"
    description="Evidence based physiotherapy programs with you in mind"
    headerImage={
      <Image
        alt=""
        src="/images/squat-phone.png"
        width={240}
        height={547}
        sizes="240px"
      />
    }>
    <UkcaBar />
    <DownloadGuide />
  </Page>
);

export default ProgramsPage;
