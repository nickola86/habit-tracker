import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Habit, HabitButtonProps } from './types';
import { Typography } from '@mui/material';

import '../styles/HabitButton.css'

export const HabitButton = (props:HabitButtonProps) => {
    const h: Habit = props.habit
    return <Card className='habit-button-card'>
        <CardContent>
            <Typography>{h.icon}</Typography>
            <Typography>{h.title}</Typography>
        </CardContent>
    </Card>
}