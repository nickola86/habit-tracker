import { Icon } from '@mui/material';
import React, { useEffect } from 'react'
import '../styles/Monthpicker.css'
import {addDays, addMonths, getMonthName, getShortYear, isSameDate} from '../hooks/useDates';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {selectedDateState} from "../atoms/selectedDateState";
import {useRecoilState} from "recoil";
import {format} from "util";

export const Monthpicker = (props: any) => {

    const [dateSelected, setDateSelected] = useRecoilState(selectedDateState)
    const today = new Date()

    return <div className='monthpicker-container' style={{marginBottom:'1em'}}>
        <div className="button" onClick={(evt)=>{evt.preventDefault(); setDateSelected(addMonths(dateSelected,-1))}}>
            <ChevronLeftIcon />
        </div>
        <div className='calendar'>
            <p className='month' style={{margin:'1em'}}>{getMonthName(dateSelected)+" '"+getShortYear(dateSelected)}</p>
        </div>
        <div className={"button " + (addMonths(dateSelected,1) > today ? 'disabled' : '')} onClick={(evt)=>{evt.preventDefault(); addMonths(dateSelected,1) <= today? setDateSelected(addMonths(dateSelected,1)): setDateSelected(today)}}>
            <ChevronRightIcon />
        </div>
    </div>;
}