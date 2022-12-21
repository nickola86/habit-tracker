import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Habit, HabitButtonProps } from './types';
import { Typography } from '@mui/material';

export const HabitButton = (props:HabitButtonProps) => {
    const h: Habit = props.habit
    return <Card sx={{ width: 300,height: 150, display:'flex', flexFlow:'column', alignItems:'center', justifyContent:'center', margin:'1em'}}>
        <CardContent>
            <Typography>{h.icon}</Typography>
            <Typography>{h.title}</Typography>
        </CardContent>
    </Card>
}