import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/App'), { ssr: false });

const HomePage: NextPage = () => <App />;

export default HomePage;
