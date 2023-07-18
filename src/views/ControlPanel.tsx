import * as React from 'react'
import {Grid, Alert} from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import Image from '../components/Image';
import ReactGA from "react-ga4";
import MetaHeaders from '../components/MetaHeaders';
import { Tune } from '@mui/icons-material';

export default function ControlPanel(){    

    const { t, i18n } = useTranslation();
    const basepath="/static/images/control-panel/smartworkingvan-control-panel-";
    ReactGA.send({ hitType: "pageview", page: window.location.pathname});
    return <div className='page-base'>
        <h1>{t('Pannello di controllo')}</h1>
        <MetaHeaders title={t('Pannello di controllo')}></MetaHeaders>
        <p>
            <Trans>
            Dal pannello di controllo è possibile monitorare lo stato dei serbatoi delle acque, la temperatura interna e la carica delle batterie, oltre che accendere e spegnere luci e dispositivi elettrici.
            </Trans>
        </p>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
                <Image path={`${basepath}onoff.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Accensione e spegnimento generale
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}water-pump.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Accensione e spegnimento della pompa dell'acqua
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}internal-lights.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Accensione e spegnimento delle luci interne
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}external-light.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Accensione e spegnimento della luce esterna
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}service-batteries-voltage.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Indicatore di tensione della batteria motore in Volt
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}service-batteries-percentage.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                Premi due volte per l'indicatore di carica della batteria servizi
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}engine-battery-voltage.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Indicatore di tensione della batteria motore in Volt
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}engine-battery-percentage.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                Premi due volte per l'indicatore di carica della batteria motore
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}clean-water-sensor.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Indicatore del livello di acqua disponibile (0%, 33%, 66%, 100%)
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}internal-temperature.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Indicatore di temperatura interna in °C
                </Trans>
            </Grid>
        </Grid>
    </div>
}