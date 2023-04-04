import cn from 'classnames';
import { useContext } from 'react';
import { SessionContext } from '../providers/SessionProvider';
import { DashboardSidebarLink } from './DashboardSidebarLink';

type DashboardSidebarProps = {
  className?: string;
};

export const DashboardSidebar = ({ className }: DashboardSidebarProps) => {
  const { endSession } = useContext(SessionContext);

  return (
    <aside
      className={cn(
        'sticky top-0 z-40 md:w-64 h-full border-b bg-gray-50 border-gray-300 sm:border-none',
        className,
      )}
      aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <DashboardSidebarLink href="/practitioner">
              Access codes
            </DashboardSidebarLink>
          </li>
          <li>
            <DashboardSidebarLink href="/practitioner/patients">
              Patients
            </DashboardSidebarLink>
          </li>
          <li className="sm:hidden">
            <DashboardSidebarLink href="/" onClick={endSession}>
              Sign out
            </DashboardSidebarLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};
