import { createBrowserRouter } from 'react-router'
import { HomePage } from '@pages/home'
import { ROUTES } from '@shared/config'
import { RootLayout } from '@app/layouts/RootLayout'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])
