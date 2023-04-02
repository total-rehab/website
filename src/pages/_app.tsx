import 'normalize.css/normalize.css';
import '../../styles/global.css';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { SessionProvider } from '../providers/SessionProvider';

if (!process.env.STRIPE_PUBLIC_KEY) {
  throw new Error('STRIPE_PUBLIC_KEY is not set');
}

const queryClient = new QueryClient();
const stripe = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <SessionProvider>
      <Elements stripe={stripe}>
        <Component {...pageProps} />
      </Elements>
    </SessionProvider>
  </QueryClientProvider>
);

export default App;
