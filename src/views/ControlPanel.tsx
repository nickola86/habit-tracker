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
        <Trans>
            Dal pannello di controllo è possibile monitorare lo stato dei serbatoi delle acque, la temperatura interna e la carica delle batterie.
        </Trans>
        <h2>{t('TITLE')}</h2>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
                <Image path={`${basepath}1.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}2.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}3.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}4.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Picture
                </Trans>
            </Grid>
        </Grid>
    </div>
}