import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../components/website/Header';
import { Page } from '../components/website/Page';

const TITLE = 'Injury resources';
const DESCRIPTION =
  'Explore our collection of insightful blog posts on injury and recovery';

const AboutPage: NextPage = () => {
  return (
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
};

export default AboutPage;
