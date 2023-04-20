import * as React from 'react'
import { Grid } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import Image from './Image';

export default function Heater(){    
    const { t, i18n } = useTranslation();
    const basepath="/static/images/heater/smartworking-truma-combi-";
    return <div className='page-base'>
        <h1>{t('Heater')}</h1>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
            <Trans>
                La stufa serve per la produzione di aria e acqua calda, &egrave; alimentata a gas ed &egrave; comandata dal pannello "Truma CP Classic".
            </Trans>    
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}1.jpg`}/> 
            </Grid>
        </Grid>
        <h2>{t('How to turn on')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Trans>
                    Gira la ghiera esterna su una delle funzioni disponibili, dall'alto in basso:
                </Trans>
                <ul>
                    <li><Trans>Acqua 60°C</Trans></li>
                    <li><Trans>Acqua 40°C</Trans></li>
                    <li><Trans>Spento</Trans></li>
                    <li><Trans>Aria</Trans></li>
                    <li><Trans>Combi: Aria + Acqua 60°C</Trans></li>
                </ul>
                <Trans>Quando selezionata la modalità Aria o Combi &egrave; possibile regolare la potenza della stufa girando la manopola esterna selezionando i valori da 1 - potenza minima - a 5 - potenza massima.</Trans>
                <br/>
                <Grid item xs={12} md={12} p={2} pl={3} pr={3} style={{fontStyle:'italic', fontSize:'0.9em', color:'#666', borderRadius:"20px", margin:'1em 0', backgroundColor:'#f8fcff', border:"1px solid lightgray"}}>
                <Trans>Esempio: quando fuori ci sono da 5°C a 10°C, mettere la stufa a potenza "2" per avere circa 20°C all'interno del camper.</Trans>
                </Grid>
                <Trans>In estate si suggerisce di usare solo la modalità Acqua calda, mentre in stagioni fredde &egrave; quasi sempre consigliabile la funzione Combi.</Trans>
                
            </Grid>
        </Grid>
        <h2>{t('How to turn off')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Trans>
                    Gira la ghiera esterna in posizione centrale "Spento".
                </Trans>
            </Grid>
            <Grid item xs={12} md={12}>
                <Image path={`${basepath}2.jpg`}/> 
            </Grid>
        </Grid>
    </div>
}