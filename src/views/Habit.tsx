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
import Widget from "../components/Widget";
import '../styles/Habit.css'
import NewHabitEntry from "../components/NewHabitEntry";

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
      <div className='habit-container'>
          <Box sx={{ flexGrow: 1, maxWidth:'1536px', textAlign:'center'}}>
            <Breadcrumbs aria-label="breadcrumb" sx={{marginBottom:'2em', marginLeft:'1em'}}>
              <Link underline="hover" color="inherit" href="/">Dashboard</Link>
              <Typography color="text.primary">Habit: {habit.title || <CircularProgress/>}</Typography>
            </Breadcrumbs>
            <Grid container spacing={1}>
              <Grid item md={3} xs={12}>
                {widgets.map(w=><Widget key={w.id} data={w}/>)}
              </Grid>
              <Grid item md={6} xs={12} borderRadius={10} border={1} borderColor={'lightgrey'} mb='3em'>
                <MonthCalendar calendarItems={calendarItems} color={habit.color}/>
              </Grid>
              <Grid item md={3} xs={12} >
                <NewHabitEntry habit={habit}/>
              </Grid>
            </Grid>
          </Box>
      </div>
  );
}