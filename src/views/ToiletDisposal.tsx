import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import ReactGA from 'react-ga4';
import { Alert, Grid } from '@mui/material';
import Image from '../components/Image';

export default function ToiletDisposal(){    
    const { t, i18n } = useTranslation();
    const basepath="/static/images/toilet-disposal/smartworkingvan-toilet-disposal-";
    ReactGA.send({ hitType: "pageview", page: window.location.pathname});
    document.title=t('Scarico bagno')
    return <div className='page-base'>
        <h1>{t('Scarico bagno')}</h1>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Trans>
                E' possibile scaricare la cassetta WC presso le aree servizi e nei campeggi.
            </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
                <Alert severity='info'>
                    <Trans>Per trovare le aree servizi si consiglia l'uso dell'applicazione</Trans> <a href="https://park4night.com/" target="_blank" title='Park4Night'>Park4Night</a> <Trans>disponibile su Play Store e Apple Store</Trans>
                </Alert>
            </Grid>
        </Grid>
        <h2>{t('Prima dello scarico')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}1.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Aprire lo sportello del vano cassetta</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}2.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Solleva la maniglia arancione ed estrai la cassetta</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}3.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Solleva il tubo di scarico e svita il tappo della cassetta</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}5.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Alert severity='info'>
                    <Trans>Premere il pulsante tondo arancione per facilitare lo svuotamento</Trans>
                </Alert>
            </Grid>
        </Grid>
        <h2>{t('Dopo lo scarico')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}4.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Eventualmente metti un sacchetto disgregante nella cassetta, quindi rimetti la cassetta nel suo alloggiamento</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Alert severity='warning'>
                    <Trans>E' buona norma non gettare la carta igienica nella cassetta per evitare intasamenti. Per favore utilizzare un contenitore separato.</Trans>
                </Alert>
            </Grid>
        </Grid>
   </div>
}
