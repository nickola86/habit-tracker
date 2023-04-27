import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default function ToiletDisposal(){    
    const { t, i18n } = useTranslation();
    return <div className='page-base'>
        <h1>{t('Scarico bagno')}</h1>
        <p>Page body</p>
    </div>
}