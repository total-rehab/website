import { ApiComponents } from '@jambff/oac';
import { GetStaticProps, NextPage } from 'next';
import { Page } from '../../../components/Page';
import { totalRehabApi } from '../../../total-rehab-api';
import { Product } from '../../../components/Product';
import { DashboardLayout } from '../../../components/DashboardLayout';
import { Table } from '../../../components/Table';

const AccessCodesPage: NextPage = () => (
  <Page hideHeader title="Sign up" description="Sign up to the Total Rehab app">
    <DashboardLayout>
      <p className="text-xl mb-8">
        Purchase access codes to provide your patients with full access to all
        programs within the Total Rehab app.
      </p>
      <Table />
    </DashboardLayout>
  </Page>
);

export default AccessCodesPage;
