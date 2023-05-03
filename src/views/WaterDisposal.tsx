import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import ReactGA from 'react-ga4';
import { Alert, Grid } from '@mui/material';
import Image from '../components/Image';

export default function WaterDisposal(){    
    const { t, i18n } = useTranslation();
    const basepath="/static/images/water-disposal/smartworkingvan-water-disposal-";
    ReactGA.send({ hitType: "pageview", page: window.location.pathname});
    document.title=t('Scarico acqua')
    return <div className='page-base'>
        <h1>{t('Scarico acqua')}</h1>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Trans>
                E' possibile scaricare le acque grigie presso le aree servizi e nei campeggi.
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
                <Trans>Posizionare il van in modo che il tubo di scarico sia al di sopra della vasca di scarico</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}2.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Tirare verso di se la maniglia per aprire il tubo di scarico</Trans>
            </Grid>
        </Grid>
        <h2>{t('Dopo lo scarico')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Trans>Spingere la maniglia per chiudere il tubo di scarico</Trans>
            </Grid>
        </Grid>
   </div>
}
