import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import CodingPage from '../Pages/CodingPage';
import ContactPage from '../Pages/ContactPage';
import RootLayout from './RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/coding',
        element: <CodingPage />,
      },
      {
        path: '/Contact',
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
