import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import humanDate from 'human-date';
import { Page } from '../../../components/Page';

import { DashboardLayout } from '../../../components/DashboardLayout';
import { Table } from '../../../components/Table';
import { Button } from '../../../components/Button';
import { useAuthenticatedTotalRehabApi } from '../../../hooks/useAuthenticatedTotalRehabApi';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

const AccessCodesPage: NextPage = () => {
  const router = useRouter();
  const authenticatedTotalRehabApi = useAuthenticatedTotalRehabApi();

  const { data, isLoading } = useQuery(['access-codes'], () =>
    authenticatedTotalRehabApi.getAccessCodes(),
  );

  const onBuyCodesClick = () => {
    router.push('/practitioner/access-codes/purchase');
  };

  const tableData = useMemo(
    () =>
      data?.items.map((item) => ({
        code: item.code,
        createdAt: humanDate.prettyPrint(item.createdAt),
        userEmail: item.assignedUser,
      })),
    [data?.items],
  );

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
        {isLoading && (
          <LoadingSpinner className="items-center justify-center flex mt-10" />
        )}
        {tableData && <Table className="mt-8" data={tableData} />}
      </DashboardLayout>
    </Page>
  );
};

export default AccessCodesPage;
