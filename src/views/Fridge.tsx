import { Alert, Grid, Paper } from '@mui/material';
import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Image from '../components/Image';
import ReactGA from "react-ga4";
import {Helmet} from 'react-helmet'

export default function Fridge(){    

    const { t, i18n } = useTranslation();
    const Item = <></>
    const basepath="/static/images/fridge/smartworkingvan-camper-fridge-";
    ReactGA.send({ hitType: "pageview", page: window.location.pathname});
    return <div className='page-base'>
        <Helmet>
            <title>{t('Frigo')}</title>
            <meta name="description" lang='it' content="Il frigo è trivalente, questo vuol dire che può essere alimentato a gas se si &egrave; a veicolo fermo, con corrente elettrica 12v se si &egrave; a veicolo in movimento, con corrente elettrica 220v se si &egrave; nei campeggi connessi alla rete elettrica." />
            <meta name="description" lang='en' content="The fridge is trivalent, this means that it can be powered by gas if you are with the vehicle stationary, with 12v electricity if you are on the move, or with 220v electricity if you are in campsites connected to the power line." />
            <meta property="og:title" content={t('Frigo') || ""} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={document.location.href} />
            <meta property="og:image" content={`${basepath}1.jpg`}/>
        </Helmet>
        <h1>{t('Frigo')}</h1>
        <Trans>
            Il frigo è trivalente, questo vuol dire che può essere alimentato a gas se si &egrave; a veicolo fermo, con corrente elettrica 12v se si &egrave; a veicolo in movimento, con corrente elettrica 220v se si &egrave; nei campeggi connessi alla rete elettrica.
        </Trans>
        <h2>{t('Come si accende')}</h2>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
                <Image path={`${basepath}1.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Gira il selettore sul tipo di alimentazione desiderata, ad esempio: gas.
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}2.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Premi contemporaneamente il selettore della temperatura e il pulsante grigio di accensione.
                </Trans>
            </Grid>                       
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}3.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Tieni premuti entrambi i pulsanti finchè l'indicatore a destra si sposta sulla zona verde.
                </Trans>
            </Grid>                       
            <Grid item xs={12} md={12}> 
                <Image path={`${basepath}4.jpg`}/> 
            </Grid>
            <Grid item xs={12} md={12}>
                <Trans>
                    Regola la potenza del frigo in base alle tue esigenze.
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Alert severity="warning" style={{margin:'1em auto'}}>
                    <Trans>In caso di forte vento, quando il frigo è alimentato a gas, può capitare che il frigo si spenga. Prestare attenzione.</Trans>
                </Alert>
            </Grid>           
        </Grid>
        <h2>{t('Come si spegne')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Trans>
                    Gira il selettore in posizione verticale "0".
                </Trans>
            </Grid>                       
        </Grid>
    </div>
}