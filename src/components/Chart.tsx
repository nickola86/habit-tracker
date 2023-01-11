import { Card, Typography } from '@mui/material'
import '../styles/Chart.css'
import * as React from 'react'
export const Chart = (props:any) => {
    return <Card className='chart-card'>
        <Typography variant='h6'>{props.title}</Typography>
        {props.svg}
    </Card>
}