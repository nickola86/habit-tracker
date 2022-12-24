import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { HabitButton } from './HabitButton';
import { splitListByBlockSize } from '../utils/splitListByBlockSize';
import { Habit, HabitsCarouselProps } from './types';
import { useHabits } from '../hooks/useHabits';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userState';
import {useQuery} from 'react-query';
import { CircularProgress } from '@mui/material';
import '../styles/HabitsCarousel.css'

export function HabitsCarousel(props: HabitsCarouselProps)
{   
    const user = useRecoilValue(userState)
    const habitsService = useHabits(user)
    const {isLoading, isError, data: habits, error} = useQuery('habits', habitsService.fetchHabits)
    
    if(isLoading) return <CircularProgress color="primary" />
    if(isError) return <h1>Errore bruttissimo!</h1>
  
    const habitsCarousel = splitListByBlockSize(habits || [],props.elementsPerPage)

    return (
        <Carousel autoPlay={false}  className='carousel-theme'>
            {
                habitsCarousel.map( (page: Habit[],i: number) => {
                    return <div key={i} className="carousel-page-container">{
                        page.map( (h:Habit,j: number) => {
                            return <HabitButton key={j} habit={h}/>
                        })
                    }</div>
                } )
            }
        </Carousel>
    )
}