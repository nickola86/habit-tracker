import * as React from 'react'
import {Grid} from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import Image from './Image';

export default function ACInverter(){    
    const { t, i18n } = useTranslation();
    const basepath="/static/images/acinverter/smartworkingvan-ac-inverter-";
    return <div className='page-base'>
        <h1>{t('AC Inverter')}</h1>
        <Trans>
            L'inverter produce la corrente necessaria ad alimentare gli apparecchi elettrici che funzionano ad alta tensione trasformando l'energia elettrica contenuta nelle batterie servizi del camper.
        </Trans>
        <h2>{t('How to turn on')}</h2>
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
        <h2>{t('How to turn off')}</h2>
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
    </div>
}