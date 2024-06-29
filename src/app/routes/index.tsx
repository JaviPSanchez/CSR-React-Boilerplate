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
