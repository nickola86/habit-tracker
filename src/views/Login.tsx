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
import { useAuthenticationService, LoginRequest, LoginResponse} from '../services/useAuthenticationService';
import { User } from '../types';

export default function Login() {
  const { t } = useTranslation();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useRecoilState(userState)
  const navigate = useNavigate()
  const [loginStatus,setLoginStatus] = useState('')
  const authSvc = useAuthenticationService()

  useEffect(()=>{
    if(user.isUserLoggedIn) navigate('/')
  },[user,navigate])

  const doLogin = () => {    
    const user: User = {username,password}
    const loginRequest: LoginRequest = {
      user
    }
    authSvc.login(loginRequest).then((loginResponse: LoginResponse)=>{
        setUser(loginResponse.user)
        setLoginStatus(loginResponse.status)
    })
  }

  return (
      <React.Fragment>
        <ResponsiveAppBar/>
        <div className='login-box'>
          <Card sx={{ width: 300,height: 300, display:'flex', flexFlow:'column', alignItems:'center', justifyContent:'center'}}>
            <CardContent>
              <TextField variant='outlined' label='Username' id='username' onChange={e=>setUsername(e.target.value)} onKeyUp={e=>{e.key==='Enter' && doLogin()}}/>
              <br/><br/>
              <TextField variant='outlined' label='Password' id='password' type='password' onChange={e=>setPassword(e.target.value)} onKeyUp={e=>{e.key==='Enter' && doLogin()}} />
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
              <Typography sx={{ fontSize: 12 }} color="red" gutterBottom>
                {t('loginFailed')}
            </Typography>
            }
          </Card>
        </div>
    </React.Fragment>
  );
}