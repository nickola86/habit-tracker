import * as React from 'react'
import { AcUnit, AirportShuttle, Bolt, Description, Downloading, FireExtinguisher as FireExtinguisherIcon, Home, Instagram, LocalFireDepartment, OilBarrel, PropaneTank, Shower as ShowerIcon, Water, Wc, WhatsApp } from '@mui/icons-material';
import Fridge from '../views/Fridge';
import Ciro from '../views/Ciro';
import ACInverter from '../views/ACInverter';
import Heater from '../views/Heater';
import Toilet from '../views/Toilet';
import Gas from '../views/Gas';
import Shower from '../views/Shower';
import FireExtinguisher from '../views/FireExtinguisher';
import WaterRefill from '../views/WaterRefill';
import WaterDisposal from '../views/WaterDisposal';
import ToiletDisposal from '../views/ToiletDisposal';
import Image from '../components/Image';
import { MetaHeadersType } from '../components/MetaHeaders';

export const meta: MetaHeadersType = {
  title:'smartworkingvan',
  url:'https://www.smartworkingvan.com',
  generator: "Smart Working Van, an office on wheels with everything you need to work efficiently and travel!",
  image: 'https://www.smartworkingvan.com/static/images/ciro.jpg',
  description_it: "Smart Working Van, un ufficio su ruote con tutto ciò che serve per lavorare in modo efficiente viaggiando!",
  description_en:"Smart Working Van, an office on wheels with everything you need to work efficiently and travel!"
}

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
  requiresAuthentication: false,
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
  pageName:'Goboony', 
  path:'/goboony',
  externalUrl: 'https://www.goboony.it/campers/italia/sardegna/iglesias/43288',
  requiresAuthentication: false,
  icon: <Image path="/static/images/gb-favicon.png" height='24px' width='24px'/>//<SvgIcon color="action"><path xmlns="http://www.w3.org/2000/svg" d="M29.904 8.558c-1.705-1.72-3.75-2.58-6.136-2.58-2.125 0-3.965.59-5.524 1.767a9.373 9.373 0 00-.89.762c-.454.442-.847.91-1.182 1.405a6.59 6.59 0 00-.638-1.007 6.597 6.597 0 00-1.77-1.57 8.616 8.616 0 00-1.066-.563 9.287 9.287 0 00-3.781-.795c-2.477 0-4.564.83-6.263 2.488-1.7 1.658-2.55 3.695-2.55 6.109 0 2.234.707 4.123 2.12 5.669 1.412 1.546 3.136 2.318 5.173 2.318.833 0 1.705-.17 2.617-.507v-5.805a2.654 2.654 0 01-1.232.305c-.642 0-1.18-.214-1.613-.643-.433-.429-.65-.965-.65-1.608 0-.61.228-1.147.684-1.616.456-.467.988-.702 1.596-.702 1.428 0 2.143.886 2.143 2.657v6.346c0 1.399-.31 2.472-.928 3.223-.62.75-1.497 1.126-2.634 1.126-.844 0-1.676-.227-2.498-.677v5.753c1.272.417 2.324.626 3.157.626 2.734 0 4.954-.939 6.66-2.817a9.424 9.424 0 002.06-3.688c.331-1.106.496-2.322.496-3.648v-.025c.033.033.064.068.098.101.287.285.585.544.89.782 1.545 1.198 3.335 1.8 5.373 1.8 2.442 0 4.527-.858 6.254-2.573 1.243-1.234 2.037-2.657 2.385-4.264.136-.627.206-1.28.206-1.964 0-.678-.07-1.328-.206-1.952-.345-1.586-1.127-2.998-2.35-4.233m-4.576 7.996a2.314 2.314 0 01-1.73.744c-.664 0-1.236-.248-1.713-.744a2.49 2.49 0 01-.718-1.794c0-.71.237-1.312.71-1.803a2.301 2.301 0 011.72-.735 2.32 2.32 0 011.74.735c.472.491.709 1.093.709 1.803 0 .7-.24 1.297-.718 1.794M98.726 6.332v8.919c0 1.106-.4 1.658-1.198"/></SvgIcon>
},{
  pageName:'Yescapa', 
  path:'/yescapa',
  externalUrl: 'https://www.yescapa.it/camper/62312',
  requiresAuthentication: false,
  icon: <Image path="/static/images/yc-favicon.png" height='24px' width='24px'/>//<SvgIcon color="action"><path scale='50%' height='24px' xmlns="http://www.w3.org/2000/svg" d="M29.904 8.558c-1.705-1.72-3.75-2.58-6.136-2.58-2.125 0-3.965.59-5.524 1.767a9.373 9.373 0 00-.89.762c-.454.442-.847.91-1.182 1.405a6.59 6.59 0 00-.638-1.007 6.597 6.597 0 00-1.77-1.57 8.616 8.616 0 00-1.066-.563 9.287 9.287 0 00-3.781-.795c-2.477 0-4.564.83-6.263 2.488-1.7 1.658-2.55 3.695-2.55 6.109 0 2.234.707 4.123 2.12 5.669 1.412 1.546 3.136 2.318 5.173 2.318.833 0 1.705-.17 2.617-.507v-5.805a2.654 2.654 0 01-1.232.305c-.642 0-1.18-.214-1.613-.643-.433-.429-.65-.965-.65-1.608 0-.61.228-1.147.684-1.616.456-.467.988-.702 1.596-.702 1.428 0 2.143.886 2.143 2.657v6.346c0 1.399-.31 2.472-.928 3.223-.62.75-1.497 1.126-2.634 1.126-.844 0-1.676-.227-2.498-.677v5.753c1.272.417 2.324.626 3.157.626 2.734 0 4.954-.939 6.66-2.817a9.424 9.424 0 002.06-3.688c.331-1.106.496-2.322.496-3.648v-.025c.033.033.064.068.098.101.287.285.585.544.89.782 1.545 1.198 3.335 1.8 5.373 1.8 2.442 0 4.527-.858 6.254-2.573 1.243-1.234 2.037-2.657 2.385-4.264.136-.627.206-1.28.206-1.964 0-.678-.07-1.328-.206-1.952-.345-1.586-1.127-2.998-2.35-4.233m-4.576 7.996a2.314 2.314 0 01-1.73.744c-.664 0-1.236-.248-1.713-.744a2.49 2.49 0 01-.718-1.794c0-.71.237-1.312.71-1.803a2.301 2.301 0 011.72-.735 2.32 2.32 0 011.74.735c.472.491.709 1.093.709 1.803 0 .7-.24 1.297-.718 1.794M98.726 6.332v8.919c0 1.106-.4 1.658-1.198"/></SvgIcon>
}]