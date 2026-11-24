import { createBrowserRouter } from 'react-router'
import { AboutPage } from '@pages/about'
import { ContactPage } from '@pages/contact'
import { HomePage } from '@pages/home'
import { ProductsPage } from '@pages/products'
import { ServicesPage } from '@pages/services'
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
      {
        path: ROUTES.SERVICES,
        element: <ServicesPage />,
      },
      {
        path: ROUTES.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.CONTACT,
        element: <ContactPage />,
      },
    ],
  },
])
