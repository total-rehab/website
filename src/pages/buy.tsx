import { GetPaymentIntentResponse } from '@jambff/oac';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next';
import { Container } from '../components/Container';
import { Page } from '../components/Page';
import { PurchaseForm } from '../components/PurchaseForm';
import { SectionHeading } from '../components/SectionHeading';
import { SectionText } from '../components/SectionText';
import { UkcaBar } from '../components/UkcaBar';
import { totalRehabApi } from '../total-rehab-api';

if (!process.env.STRIPE_PUBLIC_KEY) {
  throw new Error('STRIPE_PUBLIC_KEY is not set');
}

const stripe = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const AboutPage: NextPage = () => {
  const { data } = useQuery(
    ['payment-intent'],
    (): Promise<GetPaymentIntentResponse> => totalRehabApi.getPaymentIntent(),
  );

  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      <section>
        <Container className="pt-12 pb-12 lg:pb-20 space-y-12 lg:space-y-24 max-w-[900px] text-center">
          <div>
            <SectionHeading>Sign up for full access</SectionHeading>
            <SectionText>
              Purchase a code to gain full access to all programs.
            </SectionText>
          </div>
          {!data?.clientSecret ? null : (
            <Elements
              stripe={stripe}
              options={{
                clientSecret: data.clientSecret,
                appearance: {
                  variables: {
                    fontFamily: 'Open Sans, ui-sans-serif, system-ui',
                  },
                },
              }}>
              <PurchaseForm />
            </Elements>
          )}
        </Container>
      </section>
      <UkcaBar />
    </Page>
  );
};

export default AboutPage;
