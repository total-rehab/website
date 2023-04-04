import { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import humanDate from 'human-date';
import { useRouter } from 'next/router';
import { Page } from '../../components/Page';
import { DashboardLayout } from '../../components/DashboardLayout';
import { Table } from '../../components/Table';
import { Button } from '../../components/Button';
import { useAuthenticatedTotalRehabApi } from '../../hooks/useAuthenticatedTotalRehabApi';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { Paginator } from '../../components/Paginator';

const LIMIT = 20;

const AccessCodesPage: NextPage = () => {
  const authenticatedTotalRehabApi = useAuthenticatedTotalRehabApi();
  const router = useRouter();
  const page = Number(router.query.page ?? 1);

  const { data, isLoading } = useQuery(['access-codes', page], () =>
    authenticatedTotalRehabApi.getAccessCodes({
      query: {
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
      },
    }),
  );

  const tableData = useMemo(
    () =>
      data?.items.map((item) => ({
        code: item.code,
        created: humanDate.prettyPrint(item.createdAt),
        action: (
          <Button href={`/practitioner/patients/create?code=${item.code}`}>
            Create patient
          </Button>
        ),
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
            <Button href="/practitioner/purchase">Buy access codes</Button>
          </div>
        </div>
        {isLoading && (
          <LoadingSpinner className="items-center justify-center flex mt-10" />
        )}
        {tableData && <Table className="mt-8" data={tableData} />}
        {data?.items && (
          <Paginator
            className="mt-12 flex justify-center"
            page={page}
            totalPages={Math.ceil(data.total / LIMIT)}
          />
        )}
      </DashboardLayout>
    </Page>
  );
};

export default AccessCodesPage;
