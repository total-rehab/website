import { NextPage } from 'next';
import Image from 'next/image';
import { Page } from '../components/website/Page';
import { UkcaBar } from '../components/website/UkcaBar';

const ProgramsPage: NextPage = () => (
  <Page
    title="Sports Injury and Post-Surgery Rehab Programs"
    description="Evidence based physiotherapy programs with you in mind"
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

export default ProgramsPage;
