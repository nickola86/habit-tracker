import * as React from 'react'
import { useTranslation } from 'react-i18next'
import MetaHeaders from '../components/MetaHeaders';
export default function Yescapa(){
    
    const { t, i18n } = useTranslation();
    return <div className='page-base'>
        <h1>{t('Yescapa')}</h1>
        <MetaHeaders title={t('Yescapa')}></MetaHeaders>
        <a href="https://www.yescapa.it/camper/62312" target="_blank">Rent at Yescapa!</a>
</div>
}