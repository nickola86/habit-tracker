import * as React from 'react';
import {useParams} from 'react-router-dom';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {useHabitsApi} from "../hooks/useHabitsApi";
import {useWidgetsApi} from "../hooks/useWidgetsApi";
import {CalendarItem, Chart, THabit, TWidget} from "../components/types";
import {useQuery, UseQueryResult} from "react-query";
import {Breadcrumbs, CircularProgress, Link, Typography} from "@mui/material";
import {useState} from "react";
import {CalendarMonth} from "@mui/icons-material";
import MonthCalendar from "../components/MonthCalendar";

export default function Habit(props: any) {

  const habitsApi = useHabitsApi()
  const widgetsApi = useWidgetsApi()

  const params = useParams();
  const habitId: number = parseInt(params.id as string);

  const [calendar,setCalendar] = useState({})
  const [habitEntry,setHabitEntry] = useState({})

  //fetch habits
  const getHabitQuery: UseQueryResult<THabit, Error> = useQuery('getHabit', ()=>{return habitsApi.getHabit(habitId)})
  const habit: THabit = getHabitQuery.data || {}

  //fetch widgets
  const getWidgetsQuery: UseQueryResult<TWidget[], Error> = useQuery('getWidgets', ()=>{return widgetsApi.getWidgets(habitId)})
  const widgets: TWidget[] = getWidgetsQuery.data || []

  const calendarItems: CalendarItem[] = habit.calendar || []

  return (
    <div >
      <Breadcrumbs aria-label="breadcrumb" sx={{margin:'1em'}}>
        <Link underline="hover" color="inherit" href="/">
          Dashboard
        </Link>
        <Typography color="text.primary">{habit.title || <CircularProgress/>}</Typography>
      </Breadcrumbs>
      <div className='habit-container' style={{display:'flex',justifyContent:'center'}}>
        <Box sx={{ flexGrow: 1, padding:'1em', maxWidth:'1536px', textAlign:'center'}}>
          <Grid container spacing={1}>
            <Grid item md={3} xs={12}>
              {widgets.length}
            </Grid>
            <Grid item md={6} xs={12} borderRadius={10} border={1} borderColor={'lightgrey'}>
              <MonthCalendar calendarItems={calendarItems} color={habit.color}/>
            </Grid>
            <Grid item md={3} xs={12} >
              {habitEntry+""}
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}