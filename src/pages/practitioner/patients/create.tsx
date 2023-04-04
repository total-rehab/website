import { NextPage } from 'next';
import { FormEventHandler, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  ApiComponents,
  CreatePatientData,
  isOpenApiClientError,
} from '@jambff/oac';
import { useRouter } from 'next/router';
import { Page } from '../../../components/Page';
import { DashboardLayout } from '../../../components/DashboardLayout';
import { useAuthenticatedTotalRehabApi } from '../../../hooks/useAuthenticatedTotalRehabApi';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { SelectInput } from '../../../components/SelectInput';
import { Alert } from '../../../components/Alert';

const CreatePatientPage: NextPage = () => {
  const authenticatedTotalRehabApi = useAuthenticatedTotalRehabApi();
  const ref = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const { data: accessCodes } = useQuery(['access-codes'], () =>
    authenticatedTotalRehabApi.getAccessCodes(),
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email')?.toString();
    const accessCodeId = formData.get('accessCodeId')?.toString();

    if (!email || !accessCodeId) {
      setIsSubmitting(false);
      setErrorMessage('Please complete all form fields');

      return;
    }

    const formObject: CreatePatientData = {
      email,
      accessCodeId: Number(accessCodeId),
    };

    let user: ApiComponents['Patient'] | null = null;

    try {
      user = await authenticatedTotalRehabApi.createPatient({
        data: formObject,
      });
    } catch (err) {
      if (isOpenApiClientError(err)) {
        setErrorMessage(
          err.data && 'message' in err.data ? err.data.message : err.message,
        );
      }

      setErrorMessage(String(err));
      setIsSubmitting(false);

      return;
    }

    router.push(`/practitioner/patients/${user.guid}`);
  };

  const onChange = () => {
    setErrorMessage('');
  };

  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      <DashboardLayout>
        <div className="md:flex-[60%]">
          <p className="text-xl mb-8">
            Fill in the patient&apos;s email address below to grant them full
            access to the Total Rehab app, using one of your access codes.
          </p>
        </div>
        {errorMessage && (
          <Alert type="error" className="mb-8">
            {errorMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert type="error" className="mb-8">
            {errorMessage}
          </Alert>
        )}
        <form
          ref={ref}
          onSubmit={onSubmit}
          onChange={onChange}
          className="space-y-7">
          <Input required type="email" label="Email" name="email" />
          {accessCodes?.items && (
            <SelectInput
              required
              label="Access code"
              name="accessCodeId"
              options={accessCodes.items.map((accessCode) => ({
                label: accessCode.code,
                value: accessCode.id,
              }))}
            />
          )}
          <div className="flex justify-end">
            <Button isSubmitButton isLoading={isSubmitting}>
              Submit
            </Button>
          </div>
        </form>
      </DashboardLayout>
    </Page>
  );
};

export default CreatePatientPage;
