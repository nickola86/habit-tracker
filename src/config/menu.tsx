import * as React from 'react'
import { AcUnit, AirportShuttle, Bolt, Downloading, Facebook, FireExtinguisher as FireExtinguisherIcon, Home, Instagram, LocalFireDepartment, OilBarrel, PropaneTank, Shower as ShowerIcon, Water, Wc, WhatsApp } from '@mui/icons-material';
import Fridge from '../views/Fridge';
import Ciro from '../views/Ciro';
import Base from '../views/Base';
import ACInverter from '../views/ACInverter';
import Heater from '../views/Heater';
import Toilet from '../views/Toilet';
import Gas from '../views/Gas';
import Shower from '../views/Shower';
import FireExtinguisher from '../views/FireExtinguisher';
import WaterRefill from '../views/WaterRefill';
import WaterDisposal from '../views/WaterDisposal';
import ToiletDisposal from '../views/ToiletDisposal';

export const routes = [{
  pageName:'Smartworkingvan',
  path:'/',
  requiresAuthentication: false,
  element: <Ciro/>,
  icon: <Home />,
  isHomePage: true
},{
  pageName:'Frigo',
  path:'/fridge',
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
  requiresAuthentication: false,
  icon:<Water/>,
  element: <WaterRefill/>
},{
  pageName:'Scarico acqua',
  path:'/water-disposal',
  requiresAuthentication: false,
  icon:<OilBarrel/>,
  element: <WaterDisposal/>
},{
  pageName:'Scarico bagno',
  path:'/toilet-disposal',
  requiresAuthentication: false,
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
},{
  pageName:'Facebook',
  path:'/facebook',
  externalUrl: 'https://facebook.com/smartworkingvan',
  requiresAuthentication: false,
  icon:<Facebook/>
}]