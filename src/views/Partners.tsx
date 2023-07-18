import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
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

export default function Partners() {

  ReactGA.send({ hitType: "pageview", page: window.location.pathname});
  const {t,i18n} = useTranslation();
  return (<div className='page-base'>
    <h1>{t('Partners')}</h1>
    <Grid container spacing={2}>
    <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 160 }}
            image="/static/images/cards/alpeko.jpg"
            title="Alpeko"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Alpeko
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <Trans>Cerchiamo di fare in modo che "Ciro", il nostro camper, sia eco friendly scegliendo accuratamente i prodotti che utilizziamo a bordo affinchè essi abbiano il minor impatto ambientale possibile.</Trans>
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://www.verdealpeko.com/lazienda/" target="_blank"><Button size="small">{t('Scopri di più')}</Button></a>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 160 }}
            image="/static/images/cards/Sergio-Nanni-Licensed-hiking-guide-and-founder-of-Jebel-Sardinia.jpg"
            title="Jebel Sardinia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jebel Sardinia
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <Trans>Jebel Sardinia è la tua guida di fiducia per escursioni e trekking in Sardegna. Scopri con noi i paesaggi di mare e di montagna del Golfo di Orosei, i segreti del Supramonte, i sapori della Barbagia, le sconfinate spiagge della Baronia e molto altro!</Trans>
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://www.jebelsardinia.com/" target="_blank"><Button size="small">{t('Scopri di più')}</Button></a>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 160 }}
            image="/static/images/cards/mindontheroad.jpg"
            title="Mindontheroad"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mindontheroad
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <Trans>Vuoi sapere come Vivere da Nomade Digitale? Leggi questa guida per sapere tutto ciò che ti serve per diventare nomade digitale e Vivere Viaggiando!</Trans>
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://www.mindontheroad.it/nomadismo-digitale/" target="_blank"><Button size="small">{t('Scopri di più')}</Button></a>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 160 }}
            image="/static/images/cards/aurora.jpg"
            title="Aurora Coworking"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Aurora Coworking
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <Trans>Aurora Coworking è uno spazio di coworking situato nella bellissima Sardegna sud-occidentale. Uno spazio ricco di tecnologia in cui accogliamo professionisti locali e nomadi digitali da tutto il mondo.</Trans>
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://www.auroracoworking.it/" target="_blank"><Button size="small">{t('Scopri di più')}</Button></a>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </div>
  );
}