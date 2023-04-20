import * as React from 'react'
import { AcUnit, AirportShuttle, Bolt, Downloading, FireExtinguisher as FireExtinguisherIcon, Home, LocalFireDepartment, OilBarrel, PropaneTank, Shower as ShowerIcon, Water, Wc, WhatsApp } from '@mui/icons-material';
import Fridge from '../components/Fridge';
import Ciro from '../views/Ciro';
import Base from '../components/Base';
import ACInverter from '../components/ACInverter';
import Heater from '../components/Heater';
import Toilet from '../components/Toilet';
import Gas from '../components/Gas';
import Shower from '../components/Shower';
import FireExtinguisher from '../components/FireExtinguisher';
import WaterRefill from '../components/WaterRefill';
import WaterDisposal from '../components/WaterDisposal';
import ToiletDisposal from '../components/ToiletDisposal';

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
  element:<ACInverter/>
},{
  pageName:'Heater',
  path:'/heater',
  requiresAuthentication: false,
  icon:<LocalFireDepartment/>,
  element: <Heater/>
},{
  pageName:'Toilet',
  path:'/toilet',
  requiresAuthentication: false,
  icon:<Wc/>,
  element: <Toilet/>
},{
  pageName:'Shower',
  path:'/shower',
  requiresAuthentication: false,
  icon:<ShowerIcon/>,
  element: <Shower/>
},{
  pageName:'Gas',
  path:'/gas',
  requiresAuthentication: false,
  icon:<PropaneTank/>,
  element: <Gas/>
},{
  pageName:'Fire extinguisher',
  path:'/fire-extinguisher',
  requiresAuthentication: false,
  icon:<FireExtinguisherIcon/>,
  element: <FireExtinguisher />
},{
  pageName:'Water refill',
  path:'/water-refill',
  requiresAuthentication: false,
  icon:<Water/>,
  element: <WaterRefill/>
},{
  pageName:'Water disposal',
  path:'/water-disposal',
  requiresAuthentication: false,
  icon:<OilBarrel/>,
  element: <WaterDisposal/>
},{
  pageName:'Toilet disposal',
  path:'/toilet-disposal',
  requiresAuthentication: false,
  icon:<Downloading/>,
  element: <ToiletDisposal/>
}
]
export const externalLinks = [
{
  pageName:'Goboony', 
  path:'https://www.goboony.it/campers/italia/sardegna/iglesias/43288',
  requiresAuthentication: false,
  icon:<AirportShuttle/>
},{
  pageName:'Whatsapp',
  path:'https://wa.me/+393513531335',
  requiresAuthentication: false,
  icon:<WhatsApp/>
}]