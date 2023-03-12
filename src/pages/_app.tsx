import 'normalize.css/normalize.css';
import '../../styles/global.css';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainNav } from '../components/website/MainNav';

const queryClient = new QueryClient();

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <MainNav activeClassName="text-gray-500 font-bold" />
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default App;
