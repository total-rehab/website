import { NextPage } from 'next';
import {
  ChangeEvent,
  FormEventHandler,
  SyntheticEvent,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import { useQuery } from '@tanstack/react-query';
import {
  GrantAccessData,
  GrantAccessResponse,
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

const AssignPage: NextPage = () => {
  const authenticatedTotalRehabApi = useAuthenticatedTotalRehabApi();
  const ref = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const { data: programs } = useQuery(['programs'], () =>
    authenticatedTotalRehabApi.getPrograms(),
  );

  const { data: accessCodes } = useQuery(['access-codes'], () =>
    authenticatedTotalRehabApi.getAccessCodes(),
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email')?.toString();
    const activityLevel = formData.get('activityLevel')?.toString();
    const dateOfBirth = formData.get('dateOfBirth')?.toString();
    const programId = formData.get('programId')?.toString();
    const accessCodeId = formData.get('accessCodeId')?.toString();

    if (
      !email ||
      !dateOfBirth ||
      !activityLevel ||
      !programId ||
      !accessCodeId
    ) {
      setIsSubmitting(false);
      setErrorMessage('Please complete all form fields');

      return;
    }

    const formObject: GrantAccessData = {
      email,
      activityLevel: activityLevel as GrantAccessData['activityLevel'],
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      programId: Number(programId),
      accessCodeId: Number(accessCodeId),
    };

    console.log(formData, JSON.stringify(formObject));

    let user: GrantAccessResponse | null = null;

    try {
      user = await authenticatedTotalRehabApi.grantAccess({ data: formObject });
    } catch (err) {
      if (isOpenApiClientError(err)) {
        setErrorMessage(err.message);
      }
    }

    setIsSubmitting(false);

    if (user) {
      router.push(`/practitioner/patients/${user.id}`);
    }
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
            Fill in a patient&apos;s details below to grant them full access to
            the Total Rehab app, using one of your access codes.
          </p>
        </div>
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
          {programs?.items && (
            <SelectInput
              required
              label="Program"
              name="programId"
              options={programs.items.map((program) => ({
                label: program.title,
                value: program.id,
              }))}
            />
          )}
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

export default AssignPage;
