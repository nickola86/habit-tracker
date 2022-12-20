import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Theme } from '@mui/material/styles';
import {routesConfig} from './config/routes';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import './i18n/i18n';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(routesConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RecoilRoot>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            body: { backgroundColor: (theme as Theme).palette.background.paper },
          })}
        />
        <RouterProvider router={router} />
      </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
