import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

import { DashboardLayoutV2 } from '@/components/layouts';

export const AppRoot = () => {
  const location = useLocation();
  return (
    <DashboardLayoutV2>
      <ErrorBoundary
        key={location.pathname}
        fallback={<div>Something went wrong!</div>}
      >
        <Outlet />
      </ErrorBoundary>
    </DashboardLayoutV2>
  );
};
