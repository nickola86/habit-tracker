import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { HabitButton } from './HabitButton';
import { splitListByBlockSize } from '../utils/splitListByBlockSize';
import { Habit, HabitsCarouselProps } from './types';

export function HabitsCarousel(props: HabitsCarouselProps)
{
    const habits: Habit[] = props.habits
    const habitsCarousel = splitListByBlockSize(habits,props.elementsPerPage)

    return (
        <Carousel autoPlay={false}>
            {
                habitsCarousel.map( (page: Habit[],i: number) => {
                    return <div key={i} style={{margin:'1em', display:'flex', flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap'}}>{
                        page.map( (h:Habit,j: number) => {
                            return <HabitButton key={j} habit={h}/>
                        })
                    }</div>
                } )
            }
        </Carousel>
    )
}