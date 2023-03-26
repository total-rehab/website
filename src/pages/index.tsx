import { ApiComponents } from '@jambff/oac';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BREAKPOINT_LG, BREAKPOINT_XL, BREAKPOINT_XXL } from '../breakpoints';
import { CardGridSection } from '../components/CardGridSection';
import { Container } from '../components/Container';
import { Page } from '../components/Page';
import { SectionHeading } from '../components/SectionHeading';
import { SectionText } from '../components/SectionText';
import { UkcaBar } from '../components/UkcaBar';
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
      <section className="pt-6 pb-6 lg:pt-24 lg:pb-24">
        <Container>
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
              <Link href="/programs/1" className="hover:underline block">
                See all programs available &gt;
              </Link>
            </SectionText>
          </div>
        </Container>
      </section>
      <UkcaBar />
      <section className="pt-6 pb-6 lg:pt-24">
        <Container>
          <div className="flex flex-wrap flex-col md:flex-row items-center">
            <SectionText className="w-full lg:w-3/5 text-center lg:text-left">
              <SectionHeading>
                Health tips and advice in the palm of your hands
              </SectionHeading>
              <p>
                Access valuable information tailored to each stage of your
                rehabilitation. Stay on track and achieve your physiotherapy
                goals with ease.
              </p>
              <Link href="/blog-posts/1" className="hover:underline block">
                Check out some helpful tips &gt;
              </Link>
            </SectionText>
            <div className="w-full lg:w-2/5 hidden lg:flex justify-end">
              <Image
                alt=""
                src="/images/empty-phone.png"
                width={350}
                height={797}
                sizes="350px"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-6 lg:pt-6 lg:pb-24">
        <Container>
          <div className="flex flex-wrap flex-col md:flex-row items-center">
            <div className="w-full lg:w-2/5 hidden lg:block">
              <Image
                alt=""
                src="/images/empty-phone.png"
                width={350}
                height={797}
                sizes="350px"
              />
            </div>
            <SectionText className="w-full lg:w-3/5 text-center lg:text-right">
              <SectionHeading>Packed with high-quality content</SectionHeading>
              <p>
                Elevate your rehab game with 500+ high quality videos and a
                choice of 7 rehab programs. Your plan will cover a range of
                modalities ideal to get you back to health from start to finish.
              </p>
              <Link href="/download" className="hover:underline block">
                Dowload the app &gt;
              </Link>
            </SectionText>
          </div>
        </Container>
      </section>
      <section className="bg-on-surface-regular text-white">
        <CardGridSection
          title="Available Plans"
          items={plans}
          itemBaseHref="/program"
          viewAllLink={{ text: 'See all plans', href: '/programs/1' }}
        />
      </section>
      <section className="bg-primary-regular-bottom">
        <CardGridSection
          title="Injury Resources"
          items={blogPosts}
          itemBaseHref="/blog-post"
          viewAllLink={{ text: 'Learn more', href: '/blog-posts/1' }}
        />
      </section>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
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
