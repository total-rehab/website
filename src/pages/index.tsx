import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../components/website/Header';
import { Page } from '../components/website/Page';

const HomePage: NextPage = () => {
  return (
    <Page
      meta={{
        title: 'Home',
        description:
          'Post-operation and sports rehabilitation programs, designed with you in mind.',
        image: {
          src: 'https://www.total-rehab.co.uk/_next/image?url=%2Fimages%2Flogo-mountains.png&w=1200&q=100',
          width: 1024,
          height: 500,
        },
      }}>
      <main>
        <Header
          title="Digital Physiotherapy App"
          description="Sports Injury and Post-Surgery Rehabiliation programs designed with you in mind."
          image={
            <>
              <div className="absolute left-[-25%] hidden xl:block">
                <Image
                  alt=""
                  src="/images/schedule-mock-up.png"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute right-0 xl:right-[-10%] hidden 2xl:block">
                <Image
                  alt=""
                  src="/images/ankle-support-mock-up.png"
                  width={500}
                  height={500}
                />
              </div>
              <div className="z-10 scale-125 xl:scale-105">
                <Image
                  alt=""
                  src="/images/ankle-and-foot-mock-up.png"
                  width={500}
                  height={500}
                />
              </div>
            </>
          }
        />
      </main>
    </Page>
  );
};

export default HomePage;
