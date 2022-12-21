import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {Chart} from './Chart'

export function ChartsCarousel(props: any)
{
    
    return (
        <Carousel autoPlay={false}>
            {
                [1,2].map( (i) => <Chart key={i} /> )
            }
        </Carousel>
    )
}