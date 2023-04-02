import { ApiComponents, GetProductPaymentIntentOptions } from '@jambff/oac';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { Container } from '../../../components/Container';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { Page } from '../../../components/Page';
import { PurchaseForm } from '../../../components/PurchaseForm';
import { SectionHeading } from '../../../components/SectionHeading';
import { SectionText } from '../../../components/SectionText';
import { UkcaBar } from '../../../components/UkcaBar';
import { totalRehabApi } from '../../../total-rehab-api';
import { DashboardLayout } from '../../../components/DashboardLayout';

if (!process.env.STRIPE_PUBLIC_KEY) {
  throw new Error('STRIPE_PUBLIC_KEY is not set');
}

type ProductPageProps = {
  product: ApiComponents['Product'];
  paymentIntent: ApiComponents['PaymentIntent'];
};

const ProductPage: NextPage<ProductPageProps> = ({
  product,
  paymentIntent,
}: ProductPageProps) => {
  const [paymentAmount, setPaymentAmount] = useState<string>();
  const stripe = useStripe();

  return (
    <DashboardLayout>
      <Page
        hideHeader
        title="Sign up"
        description="Sign up to the Total Rehab app">
        <section>
          <Container className="pt-12 pb-12 lg:pb-20 space-y-12 lg:space-y-16 text-center">
            <div>
              <SectionHeading>Sign up for full access</SectionHeading>
              <SectionText>
                Purchase access codes to provide your patients with full access
                to all programs.
              </SectionText>
              <p className="text-4xl font-medium mt-8">{paymentAmount}</p>
            </div>
            <div className="max-w-[900px]">
              {stripe ? (
                <Elements
                  stripe={stripe}
                  options={{
                    clientSecret: paymentIntent.clientSecret,
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
            </div>
          </Container>
        </section>
        <UkcaBar />
      </Page>
    </DashboardLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: (await totalRehabApi.getProducts()).items.map(({ id }) => ({
    params: { id },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  ProductPageProps,
  GetProductPaymentIntentOptions['params']
> = async ({ params }) => {
  console.log(params);

  if (!params) {
    return {
      notFound: true,
    };
  }

  const [product, paymentIntent] = await Promise.all([
    totalRehabApi.getProduct({ params }),
    totalRehabApi.getProductPaymentIntent({ params }),
  ]);

  return {
    props: {
      product,
      paymentIntent,
    },
  };
};

export default ProductPage;
