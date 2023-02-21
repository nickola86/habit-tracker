import * as React from 'react'
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Logout from '../views/Logout';
import Habit from '../views/Habit';
import Preferences from '../views/Preferences';
import Profile from '../views/Profile';
import Settings from '../views/Settings';
import { HabitTrackerRoute } from '../components/types';
import Error from '../views/Error';

export const routesConfig: HabitTrackerRoute[] = [
  {
    path: "/",
    element: <Dashboard />,
    isProtected: true
  },
    {
      path: "/login",
      element: <Login />,
      isProtected: false
    },
    {
      path: "/logout",
      element: <Logout />,
      isProtected: true
    },
    {
      path: "/habit/:id?",
      element: <Habit />,
      isProtected: true
    },
    {
      path: "/preferences",
      element: <Preferences />,
      isProtected: true
    },
    {
      path: "/profile",
      element: <Profile />,
      isProtected: true
    },
    {
      path: "/settings",
      element: <Settings />,
      isProtected: true
    },
    {
      path: "*",
      element: <Error/>,
      isProtected: false
    }
  ];
  