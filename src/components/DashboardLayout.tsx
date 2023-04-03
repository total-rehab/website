import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { FC, ReactNode, useContext } from 'react';
import { SessionContext } from '../providers/SessionProvider';
import { supabase } from '../supabase';
import { Container } from './Container';
import { DashboardNav } from './DashboardNav';
import { DashboardSidebar } from './DashboardSidebar';
import { LoadingSpinner } from './LoadingSpinner';
import { SectionHeading } from './SectionHeading';
import { SectionText } from './SectionText';

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
}: DashboardLayoutProps) => {
  const { session, isSessionLoaded } = useContext(SessionContext);

  if (!isSessionLoaded) {
    return (
      <LoadingSpinner
        size={60}
        className="flex flex-1 items-center justify-center"
      />
    );
  }

  if (!session) {
    return (
      <Container small className="flex-1 py-12 space-y-6 lg:space-y-16">
        <div className="text-center">
          <SectionHeading>Sign in</SectionHeading>
          <SectionText>
            Sign in for access to the practitioner&apos;s dashboard.
          </SectionText>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          redirectTo="/test"
        />
      </Container>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <DashboardNav className="hidden sm:flex" />
      {session ? (
        <div className="flex flex-col flex-1 sm:flex-row bg-gray-50">
          {session && <DashboardSidebar className="w-full sm:w-48 md:w-64" />}
          <div className="flex-1 bg-white py-6">
            <Container>
              <div>{children}</div>
            </Container>
          </div>
        </div>
      ) : (
        <LoadingSpinner
          size={60}
          className="flex flex-1 justify-center items-center"
        />
      )}
    </div>
  );
};
