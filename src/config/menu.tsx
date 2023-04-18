import * as React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import { AcUnit, AirportShuttle, Bolt, Downloading, FireExtinguisher, LocalFireDepartment, OilBarrel, PropaneTank, Shower, Water, Wc, WhatsApp } from '@mui/icons-material';

export const routes = [{
  pageName:'Fridge',
  path:'#/fridge',
  requiresAuthentication: false,
  icon:<AcUnit/>
},{
  pageName:'AC Inverter',
  path:'#/ac-inverter',
  requiresAuthentication: false,
  icon:<Bolt/>
},{
  pageName:'Heater',
  path:'#/heater',
  requiresAuthentication: false,
  icon:<LocalFireDepartment/>
},{
  pageName:'Toilet',
  path:'#/toilet',
  requiresAuthentication: false,
  icon:<Wc/>
},{
  pageName:'Shower',
  path:'#/shower',
  requiresAuthentication: false,
  icon:<Shower/>
},{
  pageName:'Gas',
  path:'#/gas',
  requiresAuthentication: false,
  icon:<PropaneTank/>
},{
  pageName:'Fire extinguisher',
  path:'#/fire-extinguisher',
  requiresAuthentication: false,
  icon:<FireExtinguisher/>
},{
  pageName:'Water refill',
  path:'#/water-refill',
  requiresAuthentication: false,
  icon:<Water/>
},{
  pageName:'Water disposal',
  path:'#/water-disposal',
  requiresAuthentication: false,
  icon:<OilBarrel/>
},{
  pageName:'Toilet disposal',
  path:'#/toilet-disposal',
  requiresAuthentication: false,
  icon:<Downloading/>
}
]
export const settings = [
{
  pageName:'Goboony', 
  path:'/goboony',
  requiresAuthentication: false,
  icon:<AirportShuttle/>
},{
  pageName:'Whatsapp',
  path:'/whatsapp',
  requiresAuthentication: false,
  icon:<WhatsApp/>
}]