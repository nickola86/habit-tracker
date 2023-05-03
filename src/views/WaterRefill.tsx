import { Alert, Grid } from '@mui/material';
import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Image from '../components/Image';
import ReactGA from 'react-ga4';

export default function WaterRefill(){    
    const { t, i18n } = useTranslation();
    const basepath="/static/images/water-refill/smartworkingvan-water-refill-";
    ReactGA.send({ hitType: "pageview", page: window.location.pathname});
    document.title=t('Carico acqua')
    return <div className='page-base'>
        <h1>{t('Carico acqua')}</h1>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
            <Trans>
                E' possibile caricare l'acqua presso le fontanelle pubbliche presenti in strada o nei campeggi
            </Trans>    
            <Grid item xs={12} md={12}>
                <Alert severity="warning" style={{margin:'1em auto'}}>
                    <Trans>Assicurarsi sempre che l'acqua sia potabile prima di rifornire</Trans>
                </Alert>
            </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}1.jpg`}/> 
            </Grid>
        </Grid>
        <h2>{t('Prima del rifornimento')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}2.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Avvitare il raccordo alla fontanella</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}3.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Aprire con la chiave il tappo di carico acqua</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}4.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Collegare il tubo di gomma al raccordo e aprire l'acqua</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}5.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Inserire il tubo di gomma e attendere il carico completo</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Alert severity='info'>
                    <Trans>Il carico acqua è completo quando l'acqua trabocca dal foro di carico</Trans>
                </Alert>
            </Grid>
        </Grid>
        <h2>{t('Dopo il rifornimento')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Trans>Chiudere la fontana e rimuovere il raccordo</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}2.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Chiudere con la chiave il tappo di carico acqua</Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}3.jpg`}/> 
            </Grid>
        </Grid>
   </div>
}