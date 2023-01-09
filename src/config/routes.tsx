import * as React from 'react'
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Logout from '../views/Logout';
import Habit from '../views/Habit';
import Preferences from '../views/Preferences';
import Profile from '../views/Profile';
import Settings from '../views/Settings';
import { RouteObject } from 'react-router-dom';
import Error from '../views/Error';

export const routesConfig: RouteObject[] = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/logout",
      element: <Logout />
    },
    {
      path: "/habit/:id?",
      element: <Habit />
    },
    {
      path: "/preferences",
      element: <Preferences />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/settings",
      element: <Settings />
    },
    {
      path: "*",
      element: <Error/>
    }
  ];
  