import { NextPage } from 'next';
import { Page } from '../../components/Page';
import { DashboardLayout } from '../../components/DashboardLayout';

const PatientsPage: NextPage = () => {
  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      <DashboardLayout>List users</DashboardLayout>
    </Page>
  );
};

export default PatientsPage;
