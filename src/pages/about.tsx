import { NextPage } from 'next';
import Image from 'next/image';
import { Page } from '../components/website/Page';
import { UkcaBar } from '../components/website/UkcaBar';

const AboutPage: NextPage = () => (
  <Page
    title="Our Story and Mission"
    description="Discover more about Total Rehab"
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
  </Page>
);

export default AboutPage;
