import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import cn from 'classnames';
import { Page } from '../../../../components/Page';
import { DashboardLayout } from '../../../../components/DashboardLayout';
import { useAuthenticatedTotalRehabApi } from '../../../../hooks/useAuthenticatedTotalRehabApi';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { SelectInput } from '../../../../components/SelectInput';

const AssignPage: NextPage = () => {
  const authenticatedTotalRehabApi = useAuthenticatedTotalRehabApi();

  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      <DashboardLayout>
        <div className="md:flex-[60%]">
          <p className="text-xl mb-8">
            Fill in a patient&apos;s details below to grant them full access to
            the Total Rehab app, using one of your access codes.
          </p>
        </div>
        <form className="space-y-7" onChange={console.log}>
          <Input required type="email" label="Email" name="email" />
          <SelectInput
            required
            label="Activity level"
            name="activityLevel"
            options={[
              { label: 'Light', value: 'LIGHT' },
              { label: 'Moderate', value: 'MODERATE' },
              { label: 'Intensive', value: 'INTENSIVE' },
            ]}
          />
          <Input
            required
            type="date"
            label="Date of birth"
            name="dateOfBirth"
          />
          <Input required label="Program" name="program" />
          <Input required label="Access code" name="email" />
          <div className="flex justify-end">
            <Button isSubmitButton>Submit</Button>
          </div>
        </form>
      </DashboardLayout>
    </Page>
  );
};

export default AssignPage;
