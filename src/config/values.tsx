import * as React from 'react'
import { AcUnit, Bolt,  Description, Diversity1, Diversity1TwoTone, Downloading, FireExtinguisher as FireExtinguisherIcon, Home, Instagram, LocalFireDepartment, OilBarrel, PropaneTank, Shower as ShowerIcon, Tune, Water, Wc, WhatsApp } from '@mui/icons-material';
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
import Partners from '../views/Partners';
import ControlPanel from '../views/ControlPanel';
import Goboony from '../views/Goboony';
import Yescapa from '../views/Yescapa';

export const meta: MetaHeadersType = {
  title:'smartworkingvan',
  url:'https://www.smartworkingvan.com',
  generator: "Smartworkingvan, an office on wheels with everything you need to work efficiently and travel!",
  image: '/static/images/ciro.jpg',
  description_it: "Smartworkingvan, un ufficio su ruote con tutto ciò che serve per lavorare in modo efficiente viaggiando!",
  description_en:"Smartworkingvan, an office on wheels with everything you need to work efficiently and travel!"
}

export const routes = [{
  pageName:'Smartworkingvan',
  path:'/',
  isHiddenPage: false,
  element: <Ciro/>,
  icon: <Home color="primary"/>,
  isHomePage: true
},{
  pageName:'Pannello di controllo',
  path:'/control-panel',
  isHiddenPage: false,
  icon:<Tune sx={{color:'#1976d2'}}/>,
  element: <ControlPanel/>
},{
  pageName:'Stufa',
  path:'/heater',
  isHiddenPage: false,
  icon:<LocalFireDepartment sx={{color:'#1976d2'}}/>,
  element: <Heater/>
},{
  pageName:'Frigo',
  path:'/fridge',
  isHiddenPage: false,
  icon:<AcUnit sx={{color:'#1976d2'}}/>,
  element: <Fridge/>
},{
  pageName:'AC Inverter',
  path:'/ac-inverter',
  isHiddenPage: false,
  icon:<Bolt sx={{color:'#1976d2'}}/>,
  element:<ACInverter/>
},{
  pageName:'Bagno',
  path:'/toilet',
  isHiddenPage: true,
  icon:<Wc sx={{color:'#1976d2'}}/>,
  element: <Toilet/>
},{
  pageName:'Doccia',
  path:'/shower',
  isHiddenPage: true,
  icon:<ShowerIcon sx={{color:'#1976d2'}}/>,
  element: <Shower/>
},{
  pageName:'Gas',
  path:'/gas',
  isHiddenPage: false,
  icon:<PropaneTank sx={{color:'#1976d2'}}/>,
  element: <Gas/>
},{
  pageName:'Estintore',
  path:'/fire-extinguisher',
  isHiddenPage: true,
  icon:<FireExtinguisherIcon sx={{color:'#1976d2'}}/>,
  element: <FireExtinguisher />
},{
  pageName:'Carico acqua',
  path:'/water-refill',
  isHiddenPage: false,
  icon:<Water sx={{color:'#1976d2'}}/>,
  element: <WaterRefill/>
},{
  pageName:'Scarico acqua',
  path:'/water-disposal',
  isHiddenPage: false,
  icon:<OilBarrel sx={{color:'#1976d2'}}/>,
  element: <WaterDisposal/>
},{
  pageName:'Scarico bagno',
  path:'/toilet-disposal',
  isHiddenPage: false,
  icon:<Downloading sx={{color:'#1976d2'}}/>,
  element: <ToiletDisposal/>
}]

export const partners = [{
  pageName:'Partners',
  path:'/partners',
  isHiddenPage: false,
  icon:<Diversity1 color="primary"/>,
  element: <Partners/>
}]

export const externalLinks = [
{
  pageName:'Goboony', 
  path:'/goboony',
  externalUrl: 'https://www.goboony.it/campers/italia/sardegna/iglesias/43288',
  isHiddenPage: false,
  icon: <Image path="/static/images/gb-favicon.png" height='24px' width='24px'/>,
  element: <Goboony />
},{
  pageName:'Yescapa', 
  path:'/yescapa',
  externalUrl: 'https://www.yescapa.it/camper/62312',
  isHiddenPage: false,
  icon: <Image path="/static/images/yc-favicon.png" height='24px' width='24px'/>,
  element: <Yescapa/>
},{
  pageName:'Whatsapp',
  path:'/whatsapp',
  externalUrl: 'https://wa.me/+393513531335',
  isHiddenPage: false,
  icon:<WhatsApp sx={{color:'#25D366'}}/>
},{
  pageName:'Instagram',
  path:'/instagram',
  externalUrl: 'https://www.instagram.com/smartworkingvan/',
  isHiddenPage: false,
  icon: <Image path="/static/images/instagram.png" height='24px' width='24px' square/>
}]