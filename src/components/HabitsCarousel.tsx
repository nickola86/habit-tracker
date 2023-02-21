import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { HabitButton } from './HabitButton';
import { splitListByBlockSize } from '../utils/splitListByBlockSize';
import { THabit, HabitsCarouselProps } from './types';
import { useHabitsApi } from '../hooks/useHabitsApi';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userState';
import {useQuery, UseQueryResult} from 'react-query';
import { CircularProgress } from '@mui/material';
import '../styles/HabitsCarousel.css'
import {useTranslation} from "react-i18next";

export function HabitsCarousel(props: HabitsCarouselProps)
{   
    const user = useRecoilValue(userState)
    const { t } = useTranslation()
    const habitsApi = useHabitsApi()

    const getHabitsQuery: UseQueryResult<THabit[], Error> = useQuery('getHabits', habitsApi.getHabits)

    if(getHabitsQuery.isLoading) return <CircularProgress color="primary" />
    if(getHabitsQuery.isError) return <p>{t(getHabitsQuery.error.message)}</p>

    const habits: THabit[] = getHabitsQuery.data || []

    return (
        <Carousel autoPlay={false}  className='carousel-theme'>
            {
                splitListByBlockSize(habits,props.elementsPerPage).map( (page: THabit[], i: number) => {
                    return <div key={i} className="carousel-page-container">{
                        page.map( (h:THabit, j: number) => {
                            return <HabitButton key={j} habit={h}/>
                        })
                    }</div>
                } )
            }
        </Carousel>
    )
}