import {Avatar, CircularProgress, Divider, Grid, Typography} from '@mui/material';
import {AchivementBadge} from '../components/AchivementBadge'
import { width } from '@mui/system';
import * as React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Box from "@mui/material/Box";
import {splitListByBlockSize} from "../utils/splitListByBlockSize";
import {Habit, User, Badge} from "../components/types";
import {HabitButton} from "../components/HabitButton";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import {useTranslation} from "react-i18next";
import {useRecoilValue} from "recoil";
import {userState} from "../atoms/userState";
import {format} from '../hooks/useDates'
import {useBadgesApi} from "../hooks/useBadgesApi";
import {useQuery, UseQueryResult} from "react-query";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Profile() {
  const {t} = useTranslation()
  const user: User = useRecoilValue(userState)
  const badgesApi = useBadgesApi(user)
  const badgesQuery: UseQueryResult<Badge[], Error> = useQuery('getBadges',badgesApi.getBadges)
  const badges: Badge[] = badgesQuery.data || []
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user.isUserLoggedIn) navigate('/login')
  },[user])
  return (
    <Box sx={{ flexGrow: 1, marginTop:'1em', padding:'1em', maxWidth:'1536px'}}>
      <Grid container spacing={1}>
        <Grid item md={12} xs={12} mt={2} display={'flex'} justifyContent={'center'}>
            <Paper>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{padding:'1em'}}>
                  <Avatar src="/static/images/avatars/user.jpg" sx={{width:"100px",height:"100px"}}/>
                </div>
                <div style={{margin:'1em', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                  <b>{t('Username')}:</b> <span>{user.username}</span><br/>
                  <b>{t('MemberSince')}:</b> <span>{format(user.signupdate || new Date())}</span><br/>
                </div>
              </div>
            </Paper>
        </Grid>
        <Grid item md={12} xs={12} mt={5}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              ml:1,
              display: { xs: 'flex', md: 'flex' },
              justifyContent:'center',
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: '.01rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            {t('Achivements')}
          </Typography>
        </Grid>
        {
          badgesQuery.isLoading && <Grid item md={12} xs={12} display={'flex'} justifyContent={'center'}><CircularProgress/></Grid>
        }
        {
          badgesQuery.isSuccess && <Grid item md={12} xs={12} display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
            {
              badges.map( (b,i) => <AchivementBadge key={i} icon={b.icon} title={b.title} description={b.description}/>)
            }
          </Grid>
        }
      </Grid>
    </Box>
  );
}