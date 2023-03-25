import { ApiComponents } from '@jambff/oac';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BREAKPOINT_LG, BREAKPOINT_XL, BREAKPOINT_XXL } from '../breakpoints';
import { Card } from '../components/website/Card';
import { CardGrid } from '../components/website/CardGrid';
import { CardGridSection } from '../components/website/CardGridSection';
import { Container } from '../components/website/Container';
import { Page } from '../components/website/Page';
import { SectionHeading } from '../components/website/SectionHeading';
import { SectionText } from '../components/website/SectionText';
import { UkcaBar } from '../components/website/UkcaBar';
import { getBlogPosts, getPlans } from '../queries';

type HomePageProps = {
  plans: ApiComponents['Plan'][];
  blogPosts: ApiComponents['BlogPost'][];
};

const HomePage: NextPage<HomePageProps> = ({
  plans,
  blogPosts,
}: HomePageProps) => {
  return (
    <Page
      title="Digital Physiotherapy App"
      description="Sports Injury and Post-Surgery Rehabiliation programs designed with you in mind."
      headerImage={
        <>
          <div className="absolute left-[-25%] hidden xl:block">
            <Image
              priority
              alt=""
              src="/images/schedule-mock-up.png"
              width={500}
              height={500}
              sizes={`(min-width: ${BREAKPOINT_XL}px) 500px, 0px`}
            />
          </div>
          <div className="absolute right-0 xl:right-[-10%] hidden 2xl:block">
            <Image
              priority
              alt=""
              src="/images/ankle-support-mock-up.png"
              width={500}
              height={500}
              sizes={`(min-width: ${BREAKPOINT_XXL}px) 500px, 0px`}
            />
          </div>
          <div className="z-10 scale-125 xl:scale-105">
            <Image
              priority
              alt=""
              src="/images/ankle-and-foot-mock-up.png"
              width={500}
              height={500}
              sizes={`(min-width: ${BREAKPOINT_LG}px) 500px, 0px`}
            />
          </div>
        </>
      }>
      <Container>
        <section className="pt-24 pb-24">
          <div className="flex flex-wrap flex-col md:flex-row items-center">
            <div className="w-full lg:w-2/5 hidden lg:block">
              <Image
                alt=""
                src="/images/squat-phone.png"
                width={350}
                height={797}
                sizes="350px"
              />
            </div>
            <SectionText className="w-full lg:w-3/5 text-center lg:text-right">
              <SectionHeading>
                Adaptive rehab program depending on your level of pain
              </SectionHeading>
              <p>
                Our physiotherapy app features a unique adaptive rehab program
                that adjust according to your pain level during each exercise,
                ensuring a comfortable and effective rehabilitation journey.
              </p>
              <Link href="/programs" className="hover:underline block">
                See all programs available &gt;
              </Link>
            </SectionText>
          </div>
        </section>
      </Container>
      <UkcaBar />
      <section className="bg-on-surface-regular text-white">
        <CardGridSection
          title="Available Plans"
          items={plans}
          baseUrl="/programs"
          viewAllText="See all plans"
        />
      </section>
      <section className="bg-primary-regular-bottom">
        <CardGridSection
          title="Injury Resources"
          items={blogPosts}
          baseUrl="/blog"
          viewAllText="Learn more"
        />
      </section>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const [{ items: plans }, { items: blogPosts }] = await Promise.all([
    getPlans({ query: { limit: 4, sort: { createdAt: 'desc' } } }),
    getBlogPosts({ query: { limit: 4, sort: { createdAt: 'desc' } } }),
  ]);

  return {
    props: {
      plans,
      blogPosts,
    },
  };
};

export default HomePage;
