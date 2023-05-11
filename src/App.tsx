import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import {routes, externalLinks, partners} from './config/values';
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ProtectedRoute from "./components/ProtectedRoute";
import { I18nextProvider, useTranslation } from 'react-i18next';
import Ciro from './views/Ciro';


export default function App() {

  const queryClient = new QueryClient()
  const {t,i18n} = useTranslation();

  const externalWithElement = externalLinks.filter(e=>{return !!e.element})

  return <QueryClientProvider client={queryClient}>
    <CssBaseline />
    <I18nextProvider i18n={i18n}>
    <Router>
        <ResponsiveAppBar/>
        <Routes>
        {
            routes.map((r,i)=>
              <Route key={i} path={r.path} element={r.requiresAuthentication ? <ProtectedRoute>{r.element}</ProtectedRoute> : <>{r.element}</>} />
            )
          }
          {
            externalWithElement.map((r,i)=>
              <Route key={i} path={r.path} element={r.requiresAuthentication ? <ProtectedRoute>{r.element}</ProtectedRoute> : <>{r.element}</>} />
            )
          }
          {
            partners.map((r,i)=>
              <Route key={i} path={r.path} element={r.requiresAuthentication ? <ProtectedRoute>{r.element}</ProtectedRoute> : <>{r.element}</>} />
            )
          }
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    </Router>
    </I18nextProvider>
  </QueryClientProvider>

}
