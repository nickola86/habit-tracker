import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default function FireExtinguisher(){    
    const { t, i18n } = useTranslation();
    return <div className='page-base'>
        <h1>{t('Fire extinguisher')}</h1>
        <p>Page body</p>
    </div>
}