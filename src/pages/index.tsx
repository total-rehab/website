import { NextPage } from 'next';
import Image from 'next/image';
import { BREAKPOINT_LG, BREAKPOINT_XL, BREAKPOINT_XXL } from '../breakpoints';
import { Header } from '../components/website/Header';
import { Page } from '../components/website/Page';

const TITLE = 'Digital Physiotherapy App';
const DESCRIPTION =
  'Sports Injury and Post-Surgery Rehabiliation programs designed with you in mind.';

const HomePage: NextPage = () => {
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
          descriptionClassName="xl:w-[85%]"
          image={
            <>
              <div className="absolute left-[-25%] hidden xl:block">
                <Image
                  alt=""
                  src="/images/schedule-mock-up.png"
                  width={500}
                  height={500}
                  sizes={`(min-width: ${BREAKPOINT_XL}px) 500px, 0px`}
                />
              </div>
              <div className="absolute right-0 xl:right-[-10%] hidden 2xl:block">
                <Image
                  alt=""
                  src="/images/ankle-support-mock-up.png"
                  width={500}
                  height={500}
                  sizes={`(min-width: ${BREAKPOINT_XXL}px) 500px, 0px`}
                />
              </div>
              <div className="z-10 scale-125 xl:scale-105">
                <Image
                  alt=""
                  src="/images/ankle-and-foot-mock-up.png"
                  width={500}
                  height={500}
                  sizes={`(min-width: ${BREAKPOINT_LG}px) 500px, 0px`}
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
