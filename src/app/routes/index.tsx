import { createBrowserRouter } from 'react-router-dom';

import { AppRoot } from './app/root';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { LandingRoute } = await import('./landing');
        return { Component: LandingRoute };
      },
    },
    {
      path: '/auth/login',
      lazy: async () => {
        const { LoginRoute } = await import('./auth/login');
        return { Component: LoginRoute };
      },
    },
    {
      path: '/accounts',
      lazy: async () => {
        const { Accounts } = await import('./accounts');
        return { Component: Accounts };
      },
    },
    {
      path: '/bookings',
      lazy: async () => {
        const { Bookings } = await import('./bookings');
        return { Component: Bookings };
      },
    },
    {
      path: '/cabins',
      lazy: async () => {
        const { Cabins } = await import('./cabins');
        return { Component: Cabins };
      },
    },
    {
      path: '/users',
      lazy: async () => {
        const { NewUsers } = await import('./users');
        return { Component: NewUsers };
      },
    },
    {
      path: '/settings',
      lazy: async () => {
        const { Settings } = await import('./settings');
        return { Component: Settings };
      },
    },

    {
      path: '/app',
      element: (
        // <ProtectedRoute>
        <AppRoot />
        // </ProtectedRoute>
      ),
      children: [
        {
          path: '',
          lazy: async () => {
            const { DashboardRoute } = await import('./app/dashboard');
            return { Component: DashboardRoute };
          },
        },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./not-found');
        return { Component: NotFoundRoute };
      },
    },
  ]);
