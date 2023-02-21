import { Icon } from '@mui/material';
import React, { useEffect } from 'react'
import '../styles/Datepicker.css'
import { addDays, getMonthName, getShortYear, isSameDate } from '../hooks/useDates';

import {useState} from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const DatePicker = (props: any) => {

    const [dateSelected, setDateSelected] = useState(new Date())
    const [toggleDatePicker,setToggleDatePicker] = useState(false)
    const today = new Date()

    const dates: Date[] = [addDays(dateSelected,-2),addDays(dateSelected,-1),dateSelected,addDays(dateSelected,+1),addDays(dateSelected,+2)]    

    return <div className='datepicker-container'>
        <div className="button" onClick={(evt)=>{evt.preventDefault(); setDateSelected(addDays(dateSelected,-4))}}>
            <ChevronLeftIcon />
        </div>
        <div className='calendar'>
            {toggleDatePicker===false ? <p className='month' onClick={(evt)=>{evt.preventDefault(); setToggleDatePicker(!toggleDatePicker)}}>{`${getMonthName(dateSelected)} '${getShortYear(dateSelected)}`}</p> : <p>datepicker</p>}
            <div className='dates'>
                {dates.map((d,i)=><div key={i} className={'date ' + (isSameDate(dateSelected,d) ? 'selected' : '') + (d>today ? 'disabled' : '')} onClick={(evt)=>{evt.preventDefault(); d<=today && setDateSelected(d)}}>{d.getDate()}</div>)}
            </div>
        </div>
        <div className={"button " + (addDays(dateSelected,4) > today ? 'disabled' : '')} onClick={(evt)=>{evt.preventDefault(); addDays(dateSelected,4) <= today? setDateSelected(addDays(dateSelected,4)): setDateSelected(today)}}>
            <ChevronRightIcon />
        </div>
    </div>;
}