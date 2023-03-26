import { NextPage } from 'next';
import Image from 'next/image';
import { Container } from '../components/Container';
import { Page } from '../components/Page';
import { SectionHeading } from '../components/SectionHeading';
import { SectionText } from '../components/SectionText';
import { UkcaBar } from '../components/UkcaBar';

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
    <Container className="pt-12 pb-12 lg:pt-24 lg:pb-24 space-y-12 lg:space-y-24">
      <section>
        <div className="bg-on-surface-regular text-white p-8 lg:px-16 lg:py-12 rounded-[3em]">
          <SectionText className="w-full lg:w-4/5 ml-auto text-center lg:text-right">
            <SectionHeading>Our Mission</SectionHeading>
            <p>
              Dharam Vyas, CEO of Total Rehab, believes that the world of
              physioterhapy needs to be revolutionised in reponse to the ever
              increasing waiting times to see a physiotherapist in the NHS.
            </p>
            <p>
              To help achieve this, he created Total Rehab App. A mobile app,
              complete with four sports injury plans for lower back, shoulder,
              ankle and hamstring. As well as three post-operation rehab
              programs for total hip replacement, total knee replacement and ACL
              rupture.
            </p>
            <p>
              Total Rehab App are working hard to develop more programs for
              users in the upcoming months, so stay tuned!
            </p>
          </SectionText>
        </div>
      </section>
      <section>
        <div className="bg-primary-regular text-white p-8 lg:px-16 lg:py-12 rounded-[3em]">
          <SectionText className="w-full lg:w-4/5 text-center lg:text-left">
            <SectionHeading>Our Story</SectionHeading>
            <p>
              Total Rehab App was created by our founder and CEO Dharam Vyas. He
              has over 10 years of clinical experience as a Sports Therapist,
              running his own Sports Injury and Osteopathy clinic in Bromley,
              London.
            </p>
            <p>
              In 2021, a sporting injury led Dharam to undergo ACL Rupture
              surgery, and he reliased the lack of thorough and personalised
              rehabiliation programs available online and through the NHS. This
              led him on a journey to create a mobile app capable of providing
              such programs for all post-surgery and sports injury interventions
              regardless of age and activity level.
            </p>
          </SectionText>
        </div>
      </section>
      <section>
        <div className="bg-on-surface-regular text-white p-8 lg:px-16 lg:py-12 rounded-[3em]">
          <SectionText className="w-full lg:w-4/5 ml-auto text-center lg:text-right">
            <SectionHeading>Our Values</SectionHeading>
            <p>
              Our physiotherapy mobile app is built on the foundation of caring,
              innovation, trustworthiness and compassion. We believe in
              providing the highest quality care to our users, delivered with
              empathy and understanding. Our innovative approach utilizes the
              latest technology to create effective rehabiliation plans for each
              individuals. We strive to build trust with our users by providing
              transparent information, ensuring utmost privacy and security. We
              understand rehabiliation can be challenging and we wish to provide
              support and encouragement every step of the way.
            </p>
          </SectionText>
        </div>
      </section>
    </Container>
    <UkcaBar />
  </Page>
);

export default AboutPage;
