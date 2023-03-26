import { GetPaymentIntentResponse } from '@jambff/oac';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next';
import { getUserLocale } from 'get-user-locale';
import { useEffect, useState } from 'react';
import { Container } from '../components/Container';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Page } from '../components/Page';
import { PurchaseForm } from '../components/PurchaseForm';
import { SectionHeading } from '../components/SectionHeading';
import { SectionText } from '../components/SectionText';
import { UkcaBar } from '../components/UkcaBar';
import { totalRehabApi } from '../total-rehab-api';

if (!process.env.STRIPE_PUBLIC_KEY) {
  throw new Error('STRIPE_PUBLIC_KEY is not set');
}

const BuyPage: NextPage = () => {
  const [paymentAmount, setPaymentAmount] = useState<string>();
  const stripe = useStripe();

  const { data } = useQuery(
    ['payment-intent'],
    (): Promise<GetPaymentIntentResponse> => totalRehabApi.getPaymentIntent(),
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    setPaymentAmount(
      new Intl.NumberFormat(getUserLocale() ?? 'en-UK', {
        style: 'currency',
        currency: data.currency,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      }).format(data.amount / 100),
    );
  }, [data]);

  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      <section>
        <Container className="pt-12 pb-12 lg:pb-20 space-y-12 lg:space-y-16 max-w-[900px] text-center">
          <div>
            <SectionHeading>Sign up for full access</SectionHeading>
            <SectionText>
              Purchase a code to gain full access to all programs.
            </SectionText>
            <p className="text-4xl font-medium mt-8">{paymentAmount}</p>
          </div>
          {data?.clientSecret ? (
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
          ) : (
            <LoadingSpinner size={60} className="flex justify-center" />
          )}
        </Container>
      </section>
      <UkcaBar />
    </Page>
  );
};

export default BuyPage;
