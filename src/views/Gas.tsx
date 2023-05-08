import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import ReactGA from 'react-ga4';
import { Alert, Grid } from '@mui/material';
import Image from '../components/Image';

export default function Gas(){    
    const { t, i18n } = useTranslation();
    const basepath="/static/images/gas/smartworkingvan-gas-";
    ReactGA.send({ hitType: "pageview", page: window.location.pathname});
    document.title=t('Gas')
    return <div className='page-base'>
        <h1>{t('Gas')}</h1>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
            <Alert severity='info'>
                <Trans>
                Per la legge di Murphy la bombola del gas finisce sempre di notte quando fa freddo... 😁
                </Trans>    
            </Alert>
            </Grid>
        </Grid>
        <h2>{t('Rimuovere la bombola vuota')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}1.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Accedere al vano bombole
                </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}2.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Slegare le bombole
                </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}3.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Chiudere la bombola collegata all'impianto
                </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
            <Alert severity='warning'>
                <Trans>Il rubinetto della bombola del gas ha la filettatura inversa, quindi il dado si</Trans> <b><Trans>avvita in senso antiorario</Trans></b> <Trans>e si</Trans> <b><Trans>svita in senso orario</Trans></b>, <Trans>al contrario di come si fa con un dado standard!</Trans>    
            </Alert>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}4.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Svitare in senso orario il tubo del gas collegato alla bombola
                </Trans>    
            </Grid>
        </Grid>
        <h2>{t('Installare la nuova bombola')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}5.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Rimuovere il tappo della nuova bombola e la nuova guarnizione
                </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}6.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Sostituire la vecchia guarnizione con la nuova
                </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
            <Alert severity='warning'>
                <Trans>Il rubinetto della bombola del gas ha la filettatura inversa, quindi il dado si</Trans> <b><Trans>avvita in senso antiorario</Trans></b> <Trans>e si</Trans> <b><Trans>svita in senso orario</Trans></b>, <Trans>al contrario di come si fa con un dado standard!</Trans>    
            </Alert>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}7.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Avvitare in senso antiorario il tubo del gas collegato alla bombola
                </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}8.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Aprire la bombola
                </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}9.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Legare la bombola
                </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}10.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>Legare la seconda bombola vuota</Trans>
            </Grid>
        </Grid>
   </div>
}
