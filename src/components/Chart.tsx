import { Card } from '@mui/material'
import '../styles/Chart.css'
import * as React from 'react'
export const Chart = (props:any) => {
    return <Card className='chart-card'>
        <h1>{props.title}</h1>
        {props.svg}
    </Card>
}