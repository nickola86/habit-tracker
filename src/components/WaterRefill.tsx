import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default function WaterRefill(){    
    const { t, i18n } = useTranslation();
    return <div className='page-base'>
        <h1>{t('Water refill')}</h1>
        <p>Page body</p>
    </div>
}