import { useRouter } from 'next/router';
import { FC, ReactNode, useContext, useEffect } from 'react';
import { SessionContext } from '../providers/SessionProvider';
import { Container } from './Container';
import { DashboardNav } from './DashboardNav';
import { DashboardSidebar } from './DashboardSidebar';
import { LoadingSpinner } from './LoadingSpinner';

type DashboardLayoutProps = {
  children: ReactNode;
  noAuthRequired?: boolean;
};

export const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
  noAuthRequired,
}: DashboardLayoutProps) => {
  const { session, isSessionLoaded } = useContext(SessionContext);
  const router = useRouter();

  useEffect(() => {
    if (!session && isSessionLoaded && !noAuthRequired) {
      router.push('/practitioner/auth');
    }
  }, [router, session, isSessionLoaded, noAuthRequired]);

  if (!isSessionLoaded) {
    return (
      <LoadingSpinner
        size={60}
        className="flex flex-1 items-center justify-center"
      />
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
