import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import router from './Routes/Router';
import './index.scss';
import './Assets/Fonts/Roboto/Roboto-Light.ttf';
import './Assets/Fonts/Roboto/Roboto-Medium.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
