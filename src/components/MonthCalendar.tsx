import * as React from "react";
import {CalendarItem, MonthCalendarProps} from "./types";
import '../styles/MonthCalendar.css'
import {Typography} from "@mui/material";
import {useRecoilValue} from "recoil";
import {selectedDateState} from "../atoms/selectedDateState";
import {getDateAsText, getCalendar, weekdays, isSameDate} from "../hooks/useDates";
import MonthCalendarTile from "./MonthCalendarTile";
import {useTranslation} from "react-i18next";
import {Monthpicker} from "./Monthpicker";


export default function MonthCalendar(props:MonthCalendarProps){
  const items: CalendarItem[] = props.calendarItems
  const selectedDate = useRecoilValue(selectedDateState)
  const calendarDates = getCalendar(selectedDate)
  const { t } = useTranslation();
  return <div className="month-calendar">
    <Monthpicker/>
    <ul className="weekdays">
      {weekdays().map(d => <li key={d}><abbr title={t(d) as string}>{t(d)}</abbr></li>)}
    </ul>
    <ol className="day-grid">
      {calendarDates.map(d =>
        <MonthCalendarTile
          key={d.getTime()}
          day={d.getDate()}
          isCurrentMonth={d.getMonth()===selectedDate.getMonth()}
          fill={computeFillValue(items,d)}
          fillColor={props.color}
        />
      )}
    </ol>

  </div>
}

function computeFillValue(items: CalendarItem[],d: Date):number {
  console.log(items)
  const i = items.find(i=>isSameDate(new Date(i.date),d))
  return !!i ? 100 * i.actualValue / i.targetValue : 0
}

/*
  <div>
    {items.map((c,i)=><CalendarDate key={i} date={c.date} actualValue={c.actualValue} targetValue={c.targetValue}/>)}
  </div>
*/