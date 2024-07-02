import { Header } from '@/components/ui/header';
import { SideBar } from '@/components/ui/sidebar';

import { DashboardLayoutProps } from './types';

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="grid min-h-screen grid-cols-dashboard-layout grid-rows-dashboard-layout">
      <Header />
      <SideBar />
      <main className="grid flex-1 items-start gap-4 bg-color-grey-50 p-4 sm:px-6 sm:py-0 md:gap-8">
        {children}
      </main>
    </div>
  );
};
