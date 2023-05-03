import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import '../styles/Ciro.css';
import { routes } from '../config/menu';
import { Fab } from '@mui/material';
import { Phone, WhatsApp } from '@mui/icons-material';
import { Trans, useTranslation } from 'react-i18next';
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
      <div style={{marginBottom:'-0.5em'}}>
        <img width="100%" src={`/static/images/foto.jpg`} />
        <h1 style={{position:'absolute',top:'1.5em',left:'1em', opacity:'0', textShadow:'1px 1px 3px black'}}><Trans>Smartworkingvan</Trans></h1>
      </div>
      </Paper>
      <Grid container>
      <Grid item md={6} xs={12}>
          <Paper elevation={3} style={{margin:'0 1em 2em 1em', padding:'0.5em 2em'}}>
            <h2><Trans>Su di noi</Trans>:</h2>
            <p>💻 <Trans>Lavoriamo su "Ciro"</Trans></p>
            <p>🌊 <Trans>Viviamo in Sardegna</Trans></p>
            <p><Trans>Lei</Trans>: <a target="_blank" title="Zeska" href="http://instagram.com/zeska_francesca">zeska_francesca</a></p>
            <p><Trans>Lui</Trans>: <a target="_blank" title="Nico" href="http://instagram.com/nicola.di.trani">nicola.di.trani</a></p>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
        <Paper elevation={3} style={{margin:'0 1em 2em 1em', padding:'0.5em 2em'}}>
            <h2><Trans>Noleggio</Trans>:</h2>
            <p><a target="_blank" title="Goboony"  href="https://www.goboony.it/campers/italia/sardegna/iglesias/43288">goboony.it</a></p>
          </Paper>
        </Grid>
      </Grid>
      {
        //appRoutes.map(r=>r.element)
      }
    </div>
  );
}