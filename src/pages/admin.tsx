import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/App'), { ssr: false });

const AdminPage: NextPage = () => <App />;

export default AdminPage;
