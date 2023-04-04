import { FC, useContext } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { SessionContext } from '../providers/SessionProvider';

type NavProps = {
  className?: string;
};

export const DashboardNav: FC<NavProps> = ({ className }: NavProps) => {
  const { endSession, isSessionLoaded } = useContext(SessionContext);

  return (
    <div className={cn('border-b bg-gray-50 border-gray-300', className)}>
      <div className="w-full container mx-auto px-6 py-3">
        <div className="relative">
          <nav className="flex justify-end" aria-label="Main Navigation">
            <ul className="gap-x-10 xl:gap-x-16 space-y-4 lg:space-y-0 text-center">
              {isSessionLoaded && (
                <li>
                  <Link
                    href="/"
                    onClick={endSession}
                    className="underline-offset-8 text-lg hover:underline font-medium">
                    Sign out
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
