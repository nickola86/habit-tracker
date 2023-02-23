import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { THabit, HabitButtonProps } from './types';
import {Divider, Typography} from '@mui/material';

import '../styles/HabitButton.css'
import { useNavigate } from 'react-router-dom';

export const HabitButton = (props:HabitButtonProps) => {
    const h: THabit = props.habit
    const navigate = useNavigate()
    const habitDetail = () => {
        console.log("habitDetail click!")
        navigate(`/habit/${h.id}`)
    }
    return <Card className='habit-button-card'>
            <CardContent onClick={habitDetail} sx={{ width: '100%' }}>
                <Typography variant={"h5"}>{h.icon}</Typography>
                <Divider color={h.color} sx={{ borderBottomWidth: 3,marginBottom:'3px' }}/>
                <Typography>{h.title}</Typography>
            </CardContent>
    </Card>
}