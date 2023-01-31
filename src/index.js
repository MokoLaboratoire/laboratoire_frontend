import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import RootLayout from './Routes/RootLayout';
import './index.scss';
import './Assets/Fonts/Roboto/Roboto-Light.ttf'
import './Assets/Fonts/Roboto/Roboto-Medium.ttf'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
