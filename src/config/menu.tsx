import * as React from 'react'
import { AcUnit, AirportShuttle, Bolt, Downloading, FireExtinguisher as FireExtinguisherIcon, Home, Instagram, LocalFireDepartment, OilBarrel, PropaneTank, Shower as ShowerIcon, Water, Wc, WhatsApp } from '@mui/icons-material';
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
  pageName:'Smartworkingvan',
  path:'/',
  requiresAuthentication: false,
  element: <Ciro/>,
  icon: <Home />,
  isHomePage: true
},{
  pageName:'Frigo',
  path:'fridge',
  requiresAuthentication: false,
  icon:<AcUnit/>,
  element: <Fridge/>
},{
  pageName:'Stufa',
  path:'/heater',
  requiresAuthentication: false,
  icon:<LocalFireDepartment/>,
  element: <Heater/>
},{
  pageName:'AC Inverter',
  path:'/ac-inverter',
  requiresAuthentication: false,
  icon:<Bolt/>,
  element:<ACInverter/>
},{
  pageName:'Bagno',
  path:'/toilet',
  requiresAuthentication: true,
  icon:<Wc/>,
  element: <Toilet/>
},{
  pageName:'Doccia',
  path:'/shower',
  requiresAuthentication: true,
  icon:<ShowerIcon/>,
  element: <Shower/>
},{
  pageName:'Gas',
  path:'/gas',
  requiresAuthentication: true,
  icon:<PropaneTank/>,
  element: <Gas/>
},{
  pageName:'Estintore',
  path:'/fire-extinguisher',
  requiresAuthentication: true,
  icon:<FireExtinguisherIcon/>,
  element: <FireExtinguisher />
},{
  pageName:'Carico acqua',
  path:'/water-refill',
  requiresAuthentication: true,
  icon:<Water/>,
  element: <WaterRefill/>
},{
  pageName:'Scarico acqua',
  path:'/water-disposal',
  requiresAuthentication: true,
  icon:<OilBarrel/>,
  element: <WaterDisposal/>
},{
  pageName:'Scarico bagno',
  path:'/toilet-disposal',
  requiresAuthentication: true,
  icon:<Downloading/>,
  element: <ToiletDisposal/>
}
]
export const externalLinks = [
{
  pageName:'Goboony', 
  path:'/goboony',
  externalUrl: 'https://www.goboony.it/campers/italia/sardegna/iglesias/43288',
  requiresAuthentication: false,
  icon:<AirportShuttle/>
},{
  pageName:'Whatsapp',
  path:'/whatsapp',
  externalUrl: 'https://wa.me/+393513531335',
  requiresAuthentication: false,
  icon:<WhatsApp/>
},{
  pageName:'Instagram',
  path:'/instagram',
  externalUrl: 'https://www.instagram.com/smartworkingvan/',
  requiresAuthentication: false,
  icon:<Instagram/>
}]