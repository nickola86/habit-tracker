import * as React from 'react'
import {Badge} from "@mui/material";
import {Star, StarBorderPurple500, StarPurple500} from "@mui/icons-material";
export default function MonthCalendarTile(props: any){
  return <li className={!!props.isCurrentMonth ? "current-month" : "other-month" }>
    <span className="day">{props.day}</span>
    {!!props.fill && <span className="fill" style={{height:!!props.fill ? props.fill+'%' : 0 +'%',backgroundColor:props.fillColor}}>{props.fill+'%'}</span>}
    {!!props.fill && props.fill>=100 && <StarBorderPurple500 className='celebration'/>}
  </li>
}