import { Grid, Paper } from '@mui/material';
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
      <Paper elevation={3} style={{margin:'0 1em 2em 1em', padding:'0.5em 2em'}}>
          <p>💻 Working from Ciro</p>
          <p>🌊 Living in Sardinia</p>
          <p>She: @zeska_francesca</p>
          <p>Him: @nicola.di.trani</p>
          <p>Rent @ <a href="www.goboony.it/campers/italia/sardegna/iglesias/43288">Goboony.it</a></p>
      </Paper>
      {
        //appRoutes.map(r=>r.element)
      }
    </div>
  );
}