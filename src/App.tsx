import * as React from 'react'
import {ReactQueryDevtools} from "react-query/devtools";
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Theme } from '@mui/material/styles';
import {routesConfig} from './config/routes';
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import {userState} from "./atoms/userState";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {

  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>
    <CssBaseline />
    <Router>
        <ResponsiveAppBar/>
        <Routes>
          {
            routesConfig.map((r,i)=>
              <Route key={i} path={r.path} element={r.isProtected ? <ProtectedRoute>{r.element}</ProtectedRoute> : <>{r.element}</>} />
            )
          }
        </Routes>
    </Router>
    <ReactQueryDevtools/>
  </QueryClientProvider>

}
