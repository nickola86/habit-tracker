import * as React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Theme } from '@mui/material/styles';
import {routesConfig} from './config/routes';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot, useRecoilValue } from 'recoil';
import './i18n/i18n';

import { QueryClient, QueryClientProvider } from 'react-query'

import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ResponsiveAppBar from './components/ResponsiveAppBar';


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            body: { backgroundColor: "#FFFFFF" },
          })}
        />
        <Router>
          <ResponsiveAppBar/>
          <Routes>
          {
            routesConfig.map((r,i)=>
              <Route key={i} path={r.path} element={r.element}/>
              )
          }            
          </Routes>
        </Router>
        </QueryClientProvider>
      </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
