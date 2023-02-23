import * as React from 'react'
import {THabit} from "./types";
export default function NewHabitEntry (props: any){
  const habit: THabit = props.habit
  console.log(habit)
  return <div style={{border: '1px dashed black', minHeight:'600px', borderRadius:'40px', margin:'0 1em 3em 1em'}}> ------- </div>
}