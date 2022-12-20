import * as React from 'react';
import {useState, useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import '../styles/login.css'

export default function Login() {
  const { t } = useTranslation();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useRecoilState(userState)
  const navigate = useNavigate()
  const [loginStatus,setLoginStatus] = useState('')

  useEffect(()=>{
    if(user.isUserLoggedIn) navigate('/')
  },[user,navigate])

  const doLogin = () => {    
    if(username==='nicola'){
      setUser({
        id:1,
        isUserLoggedIn:true,
        name: username,
        password: password
      })
    }else{
      setLoginStatus('fail')
    }
    /*
    authSvc.login().then((status)=>{
      if(status.success){
        )
      }else{
        //Login Error
      }
    })
    */
  }

  return (
      <React.Fragment>
        <ResponsiveAppBar/>
        <div className='login-box'>
          <Card sx={{ width: 300,height: 300, display:'flex', flexFlow:'column', alignItems:'center', justifyContent:'center'}}>
            <CardContent>
              <TextField variant='outlined' label='Username' onChange={e=>setUsername(e.target.value)}/>
              <br/><br/>
              <TextField variant='outlined' label='Password' type='password' onChange={e=>setPassword(e.target.value)}/>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={doLogin}>{t('logMeIn')}</Button>
            </CardActions>        
            <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
              <Link color="inherit" href="/forgotpassword">{t('forgotPassword')}</Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link color="inherit" href="/signup">{t('notAMember')}</Link>
            </Typography>
            {
              loginStatus === 'fail' &&
              <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
              <div style={{marginTop:'1em'}}>{t('loginFailed')}</div>
            </Typography>
            }
          </Card>
        </div>
    </React.Fragment>
  );
}