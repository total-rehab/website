import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Page } from '../../../components/Page';
import { DashboardLayout } from '../../../components/DashboardLayout';
import { Table } from '../../../components/Table';
import { Button } from '../../../components/Button';

const accessCodes = [
  { code: '123', createdAt: 'sometime', action: <Button>Do something</Button> },
];

const AccessCodesPage: NextPage = () => {
  const router = useRouter();

  const onBuyCodesClick = () => {
    router.push('/practitioner/access-codes/purchase');
  };

  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      <DashboardLayout>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="md:flex-[60%]">
            <p className="text-xl mb-8">
              The access codes listed below can be to provide your patients with
              full access to all programs within the Total Rehab app.
            </p>
          </div>
          <div>
            <Button onClick={onBuyCodesClick}>Buy access codes</Button>
          </div>
        </div>
        <Table className="mt-8" data={accessCodes} />
      </DashboardLayout>
    </Page>
  );
};

export default AccessCodesPage;
