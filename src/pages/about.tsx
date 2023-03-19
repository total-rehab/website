import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../components/website/Header';
import { Page } from '../components/website/Page';

const TITLE = 'Our Story and Mission';
const DESCRIPTION = 'Discover more about Total Rehab';

const AboutPage: NextPage = () => (
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

export default AboutPage;
