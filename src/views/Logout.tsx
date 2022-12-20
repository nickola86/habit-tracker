import * as React from 'react'
import {useEffect} from 'react'
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import { useNavigate } from 'react-router-dom';

export default function Logout() {

  const [user, setUser] = useRecoilState(userState)
  const navigate = useNavigate()

  useEffect(()=>{
    setUser({isUserLoggedIn:false})
    navigate('/login')
  },[])

  return (
    <div></div>
  );
}