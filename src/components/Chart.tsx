import { Card } from '@mui/material'
import * as React from 'react'
export const Chart = (props:any) => {
    return <Card>
        <h1>{props.title}</h1>
        {props.svg}
    </Card>
}