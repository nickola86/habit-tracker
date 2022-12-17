import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';


export default function Dashboard() {

  const navigate = useNavigate()
  const isUserLoggedIn: boolean = false;
  useEffect(() => {
    if(!isUserLoggedIn) navigate('/login')      
  });
  return (
      <div>
          <ResponsiveAppBar/>
          <h1>Welcome to the Dashboard</h1>
          <Fab
            color="secondary"
            sx={{
              position: 'absolute',
              bottom: (theme) => theme.spacing(5),
              right: (theme) => theme.spacing(5),
            }}
          >
            <AddIcon />
          </Fab>
    </div>
  );
}