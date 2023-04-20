import { Grid } from '@mui/material';
import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Image from './Image';
export default function Base(){
    
    const { t, i18n } = useTranslation();
    const basepath="/static/images/[component]/";

    return <div className='page-base'>
        <h1>{t('Heater')}</h1>
        <Trans>
            Description
        </Trans>
        <h2>{t('How to turn on')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}n.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Description
                </Trans>
            </Grid>                       
        </Grid>
        <h2>{t('How to turn off')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Trans>
                    Description
                </Trans>
            </Grid>
        </Grid>
</div>
}