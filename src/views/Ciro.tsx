import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import '../styles/Ciro.css';
import { routes } from '../config/values';
import { Fab } from '@mui/material';
import { Instagram, Phone, WhatsApp } from '@mui/icons-material';
import { Trans, useTranslation } from 'react-i18next';
import FabContactUs from '../components/FabContactUs';
import ReactGA from "react-ga4";
import Image from '../components/Image';
import MetaHeaders from '../components/MetaHeaders';

export default function Ciro() {

  ReactGA.send({ hitType: "pageview", page: window.location.pathname});
  
  const appRoutes = routes.filter(r=>r.requiresAuthentication===false && r.isHomePage!==true)

  const {t,i18n} = useTranslation();
  document.title=t('smartworkingvan')
  return (
    <div>
      <MetaHeaders></MetaHeaders>
      <Paper elevation={3} style={{margin:'2em 1em 0 1em', overflow:'hidden', borderBottomLeftRadius:0,borderBottomRightRadius:0}}>
      <div style={{marginBottom:'-0.5em'}}>
        <img width="100%" src={`/static/images/ciro.jpg`} />
        <h1 style={{position:'absolute',top:'1.5em',left:'1em', opacity:'0', textShadow:'1px 1px 3px black'}}><Trans>Smartworkingvan</Trans></h1>
      </div>
      </Paper>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Paper elevation={3} style={{margin:'0 1em 2em 1em', padding:'0.5em 2em', borderTopLeftRadius:0, borderTopRightRadius:0}}>
            <h2><Trans>Su di noi</Trans>:</h2>
            <p>💻 <Trans>Lavoriamo sul nostro camper "Ciro"</Trans></p>
            <p>🌊 <Trans>Viviamo in Sardegna</Trans></p>
            <p><Instagram style={{verticalAlign:'bottom'}}/> <a target="_blank" title="Smartworkingvan" href="http://instagram.com/smartworkingvan">smartworkingvan</a></p>
          </Paper>
        </Grid>
        <Grid item md={12} xs={12}>
        <Paper elevation={3} style={{margin:'0 1em 2em 1em', padding:'0.5em 2em'}}>
            <h2><Trans>Noleggio</Trans>:</h2>
            <Grid container display={'flex'} justifyContent={'space-evenly'}>
            <Grid item xs={12} md={5} mb={2}>
                <a target="_blank" title="Goboony"  href="https://www.goboony.it/campers/italia/sardegna/iglesias/43288">
                  <Image path={'/static/images/goboony.jpg'}></Image> 
                </a>
              </Grid>
              <Grid item xs={12} md={5} mb={2}>
                <a target="_blank" title="Yescapa"  href="https://www.yescapa.it/camper/62312/">
                  <Image path={'/static/images/yescapa.jpg'}></Image> 
                </a>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}