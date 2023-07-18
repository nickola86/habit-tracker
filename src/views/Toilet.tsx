import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default function Toilet(){    
    const { t, i18n } = useTranslation();
    return <div className='page-base'>
        <h1>{t('Bagno')}</h1>
        <p>Page body</p>
    </div>
}