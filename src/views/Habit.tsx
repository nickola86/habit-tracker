import * as React from 'react';
import { useParams } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Habit(props: any) {

  let { id } = useParams();

  return (
      <div>
          <h1>Welcome to Habit page! {id && ` this is the habit number: ${id}`}</h1>
    </div>
  );
}