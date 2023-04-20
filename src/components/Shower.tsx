import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default function Shower(){    
    const { t, i18n } = useTranslation();
    return <div className='page-base'>
        <h1>{t('Shower')}</h1>
        <p>Page body</p>
    </div>
}