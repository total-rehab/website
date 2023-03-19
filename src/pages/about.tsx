import { NextPage } from 'next';
import Image from 'next/image';
import { Page } from '../components/website/Page';
import { UkcaBar } from '../components/website/UkcaBar';

const AboutPage: NextPage = () => (
  <Page
    title="Our Story and Mission"
    description="Discover more about Total Rehab"
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
    <UkcaBar />
  </Page>
);

export default AboutPage;
