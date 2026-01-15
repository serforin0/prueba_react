import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '../../pages'
import { AppShell } from './AppShell'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])

export function AppRouterProvider() {
  return <RouterProvider router={router} />
}
