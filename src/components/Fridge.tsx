import { Grid } from '@mui/material';
import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Image from './Image';

export default function Fridge(){    
    const { t, i18n } = useTranslation();
    const Item = <></>
    const basepath="/static/images/fridge/smartworkingvan-camper-fridge-";
    return <div className='page-base'>
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