import { NextPage } from 'next';
import {
  ChangeEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useQuery } from '@tanstack/react-query';
import { isOpenApiClientError, UpdatePatientData } from '@jambff/oac';
import { useRouter } from 'next/router';
import { differenceInYears, parse } from 'date-fns';
import { Page } from '../../../components/Page';
import { DashboardLayout } from '../../../components/DashboardLayout';
import { useAuthenticatedTotalRehabApi } from '../../../hooks/useAuthenticatedTotalRehabApi';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { SelectInput } from '../../../components/SelectInput';
import { Alert } from '../../../components/Alert';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

const activityLevels = [
  { label: 'Light', value: 'LIGHT' },
  { label: 'Moderate', value: 'MODERATE' },
  { label: 'Intensive', value: 'INTENSIVE' },
];

const calculateAge = (dob: string) => {
  const date = parse(dob, 'dd-MM-yyyy', new Date());
  const age = differenceInYears(new Date(), date);

  return age;
};

const AssignPatientPage: NextPage = () => {
  const authenticatedTotalRehabApi = useAuthenticatedTotalRehabApi();
  const ref = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activityLevel, setActivityLevel] = useState<string>(
    activityLevels[0].value,
  );

  const [dateOfBirth, setDateOfBirth] = useState<string>();
  const router = useRouter();

  const { data: programs } = useQuery(['programs'], () =>
    authenticatedTotalRehabApi.getPrograms({
      query: {
        filter: {
          activityLevel,
          isForOver60s: String(dateOfBirth && calculateAge(dateOfBirth) >= 60),
        },
      },
    }),
  );

  console.log(programs);

  const { data: user, isLoading } = useQuery(
    ['patient', router.query.guid],
    () =>
      authenticatedTotalRehabApi.getPatient({
        params: { guid: String(router.query.guid) },
      }),
    { enabled: !!router.query.guid },
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (!router.query.guid) {
      setErrorMessage('No user GUID found');
    }

    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const newActivityLevel = formData.get('activityLevel')?.toString();
    const newDateOfBirth = formData.get('dateOfBirth')?.toString();
    const newProgramId = formData.get('programId')?.toString();

    if (!newDateOfBirth || !newActivityLevel || !newProgramId) {
      setIsSubmitting(false);
      setErrorMessage('Please complete all form fields');

      return;
    }

    const formObject: UpdatePatientData = {
      activityLevel: newActivityLevel as UpdatePatientData['activityLevel'],
      dateOfBirth: new Date(newDateOfBirth).toISOString(),
      programId: Number(newProgramId),
    };

    try {
      await authenticatedTotalRehabApi.updatePatient({
        params: { guid: String(router.query.guid) },
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

    router.push('/practitioner/patients');
  };

  const onChange = () => {
    setErrorMessage('');
  };

  const onDateOfBirthChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(evt.target.value);
  };

  const onActivityLevelChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setActivityLevel(evt.target.value);
  };

  useEffect(() => {
    if (!router.query.guid) {
      router.push('/practitioner/patients');
    }
  }, [router]);

  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      <DashboardLayout>
        <div className="md:flex-[60%]">
          <p className="text-xl mb-8">
            Update the patient&apos;s details below and assign them to a
            program.
          </p>
        </div>
        {errorMessage && (
          <Alert type="error" className="mb-8">
            {errorMessage}
          </Alert>
        )}
        {user?.programId && (
          <Alert type="warning" className="mb-8">
            A program has already been assigned to this user. You can assign a
            new program, but it will clear all of their current progress on the
            existing program.
          </Alert>
        )}
        {isLoading ? (
          <LoadingSpinner className="items-center justify-center flex mt-10" />
        ) : (
          <form
            ref={ref}
            onSubmit={onSubmit}
            onChange={onChange}
            className="space-y-7">
            <SelectInput
              required
              label="Activity level"
              name="activityLevel"
              value={activityLevel}
              onChange={onActivityLevelChange}
              options={activityLevels}
            />
            <Input
              required
              type="date"
              label="Date of birth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={onDateOfBirthChange}
            />
            {programs?.items && dateOfBirth && activityLevel && (
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
            <div className="flex justify-end">
              <Button isSubmitButton isLoading={isSubmitting}>
                Submit
              </Button>
            </div>
          </form>
        )}
      </DashboardLayout>
    </Page>
  );
};

export default AssignPatientPage;
