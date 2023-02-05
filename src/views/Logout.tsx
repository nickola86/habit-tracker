import * as React from 'react'
import {useEffect} from 'react'
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import { useNavigate } from 'react-router-dom';
import {useLocalStorage} from "../hooks/useLocalStorage";

export default function Logout() {

  const [user, setUser] = useRecoilState(userState)
  const navigate = useNavigate()
  const [bearer,setBearer] = useLocalStorage('bearer','')

  useEffect(()=>{
    setUser({isUserLoggedIn:false})
    setBearer('')
    navigate('/login')
  },[])

  return (
    <div></div>
  );
}