import { Grid } from '@mui/material';
import * as React from 'react';
import '../styles/Ciro.css';
import { routes } from '../config/menu';
import { Fab } from '@mui/material';
import { Phone, WhatsApp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import FabContactUs from '../components/FabContactUs';


export default function Ciro() {
  
  const appRoutes = routes.filter(r=>r.requiresAuthentication===false && r.isHomePage!==true)

  const {t,i18n} = useTranslation();

  return (
    <div>
      <div className={'img-gradient'}>
        <img width="100%" src={`/static/images/foto.jpg`} />
      </div>
      {
        appRoutes.map(r=>r.element)
      }
    </div>
  );
}