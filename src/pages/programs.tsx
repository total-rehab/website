import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../components/website/Header';
import { Page } from '../components/website/Page';

const TITLE = 'Sports Injury and Post-Surgery Rehab Programs';
const DESCRIPTION = 'Evidence based physiotherapy programs with you in mind';

const ProgramsPage: NextPage = () => (
  <Page
    meta={{
      title: TITLE,
      description: DESCRIPTION,
    }}>
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
  </Page>
);

export default ProgramsPage;
