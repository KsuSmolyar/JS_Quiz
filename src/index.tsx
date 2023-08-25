import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/styles/reset.css'
import '../src/styles/vars.css'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router';


const router = createBrowserRouter(routes, { basename: '/JS_Quiz' });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
