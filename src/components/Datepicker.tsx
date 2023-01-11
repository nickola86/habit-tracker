import { Icon } from '@mui/material';
import React, { useEffect } from 'react'
import '../styles/Datepicker.css'
import { addDays, getMonthName, getShortYear, isSameDate } from '../hooks/useDates';

import {useState} from 'react';

export const DatePicker = (props: any) => {

    const [dateSelected, setDateSelected] = useState(new Date())
    const [toggleDatePicker,setToggleDatePicker] = useState(false)
    const today = new Date()

    const dates: Date[] = [addDays(dateSelected,-2),addDays(dateSelected,-1),dateSelected,addDays(dateSelected,+1),addDays(dateSelected,+2)]    

    return <div className='datepicker-container'>
        <div className="button" onClick={(evt)=>{evt.preventDefault(); setDateSelected(addDays(dateSelected,-4))}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg>
        </div>
        <div className='calendar'>
            {toggleDatePicker===false ? <p className='month' onClick={(evt)=>{evt.preventDefault(); setToggleDatePicker(!toggleDatePicker)}}>{`${getMonthName(dateSelected)} '${getShortYear(dateSelected)}`}</p> : <p>datepicker</p>}
            <div className='dates'>
                {dates.map((d,i)=><div key={i} className={'date ' + (isSameDate(dateSelected,d) ? 'selected' : '') + (d>today ? 'disabled' : '')} onClick={(evt)=>{evt.preventDefault(); d<=today && setDateSelected(d)}}>{d.getDate()}</div>)}
            </div>
        </div>
        <div className={"button " + (addDays(dateSelected,4) > today ? 'disabled' : '')} onClick={(evt)=>{evt.preventDefault(); addDays(dateSelected,4) <= today? setDateSelected(addDays(dateSelected,4)): setDateSelected(today)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
        </div>
    </div>;
}