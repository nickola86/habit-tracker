import * as React from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useRecoilValue } from "recoil"
import {userState} from '../atoms/userState'
import '../styles/dashboard.css'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled, useTheme } from '@mui/material/styles';
import { ChartsCarousel } from '../components/ChartsCarousel'
import { HabitsCarousel } from '../components/HabitsCarousel'
import { DatePicker } from '../components/Datepicker'
import { Divider, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const user = useRecoilValue(userState)
  const isUserLoggedIn = user.isUserLoggedIn
  
  useEffect(() => {
    if(!isUserLoggedIn) navigate('/login')
  },[])

  return (
    <React.Fragment>
      <div className='dashboard-container'>
        <Box sx={{ flexGrow: 1, marginTop:'1em', padding:'1em', maxWidth:'1536px'}}>
          <Grid container spacing={1}>
            <Grid item md={12} xs={12}>
              <DatePicker/>
            </Grid>
            <Grid item md={12} xs={12} mt={2}>
              <Divider/>
            </Grid>
            <Grid item md={6} xs={12}>
              <Item>
                <Typography variant='h5' mb={1}>{t('DashboardChartsTitle')}</Typography>
                <ChartsCarousel />
                <Divider sx={{marginTop:'2em',marginBottom:'2em'}}/>
              </Item>
            </Grid>
            <Grid item md={6} xs={12}>
              <Item>
                <Typography variant='h5' mb={1}>{t('DashboardHabitsTitle')}</Typography>
                <HabitsCarousel elementsPerPage={ 4 } />
                <Divider sx={{marginTop:'2em',marginBottom:'2em'}}/>
              </Item>
              <div style={{display:'flex',justifyContent:'center'}}>
                <Fab color="primary" aria-label="add" style={{float:'right'}}>
                  <AddIcon />
                </Fab>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  );
}