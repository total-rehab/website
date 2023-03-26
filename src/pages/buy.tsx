import { GetPaymentIntentResponse } from '@jambff/oac';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next';
import { Container } from '../components/Container';
import { Page } from '../components/Page';
import { PurchaseForm } from '../components/PurchaseForm';
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

  console.log(data);

  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      {!data?.clientSecret ? null : (
        <Elements stripe={stripe} options={{ clientSecret: data.clientSecret }}>
          <Container className="pt-12 pb-12 lg:pt-24 lg:pb-24 space-y-12 lg:space-y-24 max-w-[900px]">
            <PurchaseForm />
          </Container>
          <UkcaBar />
        </Elements>
      )}
    </Page>
  );
};

export default AboutPage;
