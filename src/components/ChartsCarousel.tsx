import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import { CircularProgress } from '@mui/material'
import {ChartCard} from './ChartCard'
import { useRecoilValue } from 'recoil';
import { useChartsApi } from '../hooks/useChartsApi';
import { userState } from '../atoms/userState';
import {useQuery, UseQueryResult} from 'react-query';
import {useTranslation} from "react-i18next";
import {useHabitsApi} from "../hooks/useHabitsApi";
import {Chart, THabit} from "./types";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip, Line, LineChart, CartesianGrid, XAxis, YAxis
} from 'recharts'

export function ChartsCarousel(props: any)
{
    const { t } = useTranslation();
    const chartsApi = useChartsApi()
    const getChartsQuery: UseQueryResult<Chart[], Error> = useQuery('getCharts', chartsApi.getCharts)
    if(getChartsQuery.isLoading) return <CircularProgress color="primary" />
    if(getChartsQuery.isError) return <p>{t(getChartsQuery.error.message)}</p>
    const charts: Chart[] = getChartsQuery.data || []

    return (
        <Carousel autoPlay={false} className='carousel-theme'>
            {
                (charts).map( (c,i) => {
                    if(c.type==='RadialBarChart') return <RadialBarChart key={i} style={{margin:'0 auto'}}
                      width={500}
                      height={250}
                      innerRadius="10%"
                      outerRadius="80%"
                      data={c.data}
                      startAngle={180}
                      endAngle={0}
                      title={c.title}
                    >
                        <RadialBar label={{ fill: '#666', position: 'insideStart' }} background dataKey='uv' />
                        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                        <Tooltip />
                    </RadialBarChart>

                    if(c.type==='LineChart') return <LineChart key={i} style={{margin:'0 auto'}} width={500} height={250} data={c.data}
                                                               margin={{ top: 5, right: 30, left: 20, bottom: 5 }} title={c.title}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="correre" stroke="#8884d8" />
                        <Line type="monotone" dataKey="bere acqua" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="mangiare la frutta" stroke="#cf8f5f" />
                        <Line type="monotone" dataKey="fare addominali" stroke="#db69cf" />
                    </LineChart>
                } )
            }
        </Carousel>
    )
}