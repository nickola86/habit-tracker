import * as React from 'react'
import { useTranslation } from 'react-i18next'
import MetaHeaders from '../components/MetaHeaders';
export default function Goboony(){
    
    const { t, i18n } = useTranslation();
    return <div className='page-base'>
        <h1>{t('Goboony')}</h1>
        <MetaHeaders title={t('Goboony')}></MetaHeaders>
        <a href="https://www.goboony.it/campers/italia/sardegna/iglesias/43288" target="_blank">Rent at Goboony!</a>
</div>
}