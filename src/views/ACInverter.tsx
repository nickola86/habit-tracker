import * as React from 'react'
import {Grid, Alert} from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import Image from '../components/Image';
import ReactGA from "react-ga4";

export default function ACInverter(){    

    const { t, i18n } = useTranslation();
    const basepath="/static/images/acinverter/smartworkingvan-ac-inverter-";
    ReactGA.send({ hitType: "pageview", page: window.location.pathname});
    document.title=t('AC Inverter')
    return <div className='page-base'>
        <h1>{t('AC Inverter')}</h1>
        <Trans>
            L'inverter produce la corrente necessaria ad alimentare gli apparecchi elettrici che funzionano ad alta tensione trasformando l'energia elettrica contenuta nelle batterie servizi del camper.
        </Trans>
        <h2>{t('Come si accende')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}2.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Premere il pulsante rosso
                </Trans>
            </Grid>
        </Grid>
        <h2>{t('Come si spegne')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}1.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Premere il pulsante rosso
                </Trans>
            </Grid>                       
        </Grid>
        <h2>{t('Collegamento alla rete elettrica esterna')}</h2>
        <Grid container spacing={2}>  
            <Grid item xs={12} md={12}>                     
                <Alert severity="warning"  style={{margin:'1em auto'}}><Trans>Non accendere l'inverter quando si è collegati alla rete elettrica esterna.</Trans></Alert>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}3.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Nelle aree attrezzate utilizzare la presa esterna per collegare il camper alla rete elettrica.
                </Trans>
            </Grid> 
        </Grid>
    </div>
}