import { WhatsApp } from '@mui/icons-material'
import { Fab } from '@mui/material'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { externalLinks } from '../config/values';
export default function FabContactUs(){
    const {t} = useTranslation();
    const handler = () => {
        const wa = externalLinks.find(l=>l.path==='/whatsapp')
        !!wa && window.open(wa.externalUrl,"_blank");
    }
    return <Fab onClick={handler} variant="extended" style={{backgroundColor:'white',position:'fixed',zIndex:10,bottom:'1em',right:'1.5em'}}>
    <WhatsApp sx={{ mr: 1 }} />
    {t('Scrivici')}
</Fab>
}