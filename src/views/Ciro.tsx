import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import '../styles/Ciro.css';
import { routes } from '../config/menu';
import { Fab } from '@mui/material';
import { Phone, WhatsApp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import FabContactUs from '../components/FabContactUs';
import ReactGA from "react-ga4";

export default function Ciro() {

  ReactGA.send({ hitType: "pageview", page: window.location.pathname});
  
  const appRoutes = routes.filter(r=>r.requiresAuthentication===false && r.isHomePage!==true)

  const {t,i18n} = useTranslation();
  document.title=t('smartworkingvan')
  return (
    <div>
      <Paper elevation={3} style={{margin:'0 1em 2em 1em', overflow:'hidden'}}>
      <div className={'img-gradient'}>
        <img width="100%" src={`/static/images/foto.jpg`} />
      </div>
      </Paper>
      <Paper elevation={3} style={{margin:'0 1em 2em 1em', padding:'0.5em 2em'}}>
          <p>💻 Working from Ciro</p>
          <p>🌊 Living in Sardinia</p>
          <p>She: <a target="_blank" title="Zeska" href="http://instagram.com/zeska_francesca">@zeska_francesca</a></p>
          <p>Him: <a target="_blank" title="Nico" href="http://instagram.com/nicola.di.trani">@nicola.di.trani</a></p>
          <p>Rent: <a target="_blank" title="Goboony"  href="https://www.goboony.it/campers/italia/sardegna/iglesias/43288">@Goboony.it</a></p>
      </Paper>
      {
        //appRoutes.map(r=>r.element)
      }
    </div>
  );
}