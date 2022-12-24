import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CircularProgress } from '@mui/material'
import {Chart} from './Chart'
import { useRecoilValue } from 'recoil';
import { useCharts } from '../hooks/useCharts';
import { userState } from '../atoms/userState';
import {useQuery} from 'react-query';

export function ChartsCarousel(props: any)
{
    const user = useRecoilValue(userState)
    const chartsService = useCharts(user)
    const {isLoading, isError, data: charts, error} = useQuery('dashboardcharts', chartsService.fetchDashboardCharts)
    
    if(isLoading) return <CircularProgress color="primary" />
    if(isError) return <h1>Errore bruttissimo!</h1>

    return (
        <Carousel autoPlay={false} className='carousel-theme'>
            {
                (charts || []).map( (c,i) => <Chart key={i} title={c.title} svg={c.svg} /> )
            }
        </Carousel>
    )
}