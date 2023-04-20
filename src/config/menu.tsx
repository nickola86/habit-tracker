import * as React from 'react'
import { AcUnit, AirportShuttle, Bolt, Downloading, FireExtinguisher, Home, LocalFireDepartment, OilBarrel, PropaneTank, Shower, Water, Wc, WhatsApp } from '@mui/icons-material';
import Fridge from '../components/Fridge';
import Ciro from '../views/Ciro';
import Base from '../components/Base';

export const routes = [{
  pageName:'Home',
  path:'/',
  requiresAuthentication: false,
  element: <Ciro/>,
  icon: <Home />,
  isHomePage: true
},{
  pageName:'Fridge',
  path:'fridge',
  requiresAuthentication: false,
  icon:<AcUnit/>,
  element: <Fridge/>
},{
  pageName:'AC Inverter',
  path:'/ac-inverter',
  requiresAuthentication: false,
  icon:<Bolt/>,
  element:<Base/>
},{
  pageName:'Heater',
  path:'/heater',
  requiresAuthentication: false,
  icon:<LocalFireDepartment/>,
  element: <Base/>
},{
  pageName:'Toilet',
  path:'/toilet',
  requiresAuthentication: false,
  icon:<Wc/>,
  element: <Base/>
},{
  pageName:'Shower',
  path:'/shower',
  requiresAuthentication: false,
  icon:<Shower/>,
  element: <Base/>
},{
  pageName:'Gas',
  path:'/gas',
  requiresAuthentication: false,
  icon:<PropaneTank/>,
  element: <Base/>
},{
  pageName:'Fire extinguisher',
  path:'/fire-extinguisher',
  requiresAuthentication: false,
  icon:<FireExtinguisher/>,
  element: <Base/>
},{
  pageName:'Water refill',
  path:'/water-refill',
  requiresAuthentication: false,
  icon:<Water/>,
  element: <Base/>
},{
  pageName:'Water disposal',
  path:'/water-disposal',
  requiresAuthentication: false,
  icon:<OilBarrel/>,
  element: <Base/>
},{
  pageName:'Toilet disposal',
  path:'/toilet-disposal',
  requiresAuthentication: false,
  icon:<Downloading/>,
  element: <Base/>
}
]
export const externalLinks = [
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