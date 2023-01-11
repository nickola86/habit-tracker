import * as React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';

export const routes = [{
  pageName:'Home',
  path:'/',
  requiresAuthentication: false,
  icon:<HomeIcon/>
},{
  pageName:'Login',
  path:'/',
  requiresAuthentication: false,
  icon:<LoginIcon/>
},{
  pageName:'Dashboard',
  path:'/',
  requiresAuthentication: true,
  icon:<DashboardIcon/>
}]
export const settings = [
{
  pageName:'Profile', 
  path:'/profile',
  requiresAuthentication: true,
  icon:<AccountBoxIcon/>
},{
  pageName:'Settings',
  path:'/settings',
  requiresAuthentication: true,
  icon:<SettingsIcon/>
},{
  pageName:'Logout',
  path:'/logout',
  requiresAuthentication: true,
  icon:<LogoutIcon/>
}]