import { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import humanDate from 'human-date';
import { Page } from '../../components/Page';

import { DashboardLayout } from '../../components/DashboardLayout';
import { Table } from '../../components/Table';
import { useAuthenticatedTotalRehabApi } from '../../hooks/useAuthenticatedTotalRehabApi';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const PatientsPage: NextPage = () => {
  const authenticatedTotalRehabApi = useAuthenticatedTotalRehabApi();

  const { data, isLoading } = useQuery(['patients'], () =>
    authenticatedTotalRehabApi.getPatients(),
  );

  const tableData = useMemo(
    () =>
      data?.items.map((item) => ({
        email: item.email,
        createdAt: humanDate.prettyPrint(item.createdAt),
        dateOfBirth: humanDate.prettyPrint(item.dateOfBirth),
        activityLevel: item.activityLevel,
      })),
    [data?.items],
  );

  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      <DashboardLayout>
        <div className="md:flex-[60%]">
          <p className="text-xl mb-8">
            Listed below are the patients signed up to the Total Rehab app using
            the access codes you have provided.
          </p>
        </div>
        {isLoading && (
          <LoadingSpinner className="items-center justify-center flex mt-10" />
        )}
        {tableData && <Table className="mt-8" data={tableData} />}
      </DashboardLayout>
    </Page>
  );
};

export default PatientsPage;
