import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {BadgeProps, Habit, HabitButtonProps} from './types';
import { Typography } from '@mui/material';

import '../styles/HabitButton.css'
import { useNavigate } from 'react-router-dom';

export const AchivementBadge = (props:BadgeProps) => {
    return <Card style={{display:'flex', justifyContent:'center', alignItems:'center',margin:'1em', minWidth:'5em', minHeight:'5em'}}>
        <CardContent style={{textAlign:'center'}}>
            <Typography>{props.icon}</Typography>
            <Typography variant="h6">{props.title}</Typography>
            <Typography>{props.description}</Typography>
        </CardContent>
    </Card>
}