import * as React from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";
import {userState} from "../atoms/userState";
import {useQuery, UseQueryResult} from "react-query";
import {User} from "./types";
import * as LoginApi from "../api/LoginApi";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {CircularProgress} from "@mui/material";

export default function ProtectedRoute(props: any){

  const [bearer,setBearer] = useLocalStorage('bearer','')
  const [user, setUser] = useRecoilState(userState)
  const {isUserLoggedIn} = useRecoilValue(userState)

  const loginQuery: UseQueryResult<User> = useQuery('getUser',()=>{return LoginApi.getUser(bearer)},
    {enabled:typeof bearer !== 'undefined' && bearer !== '',
      onSuccess:(response: User)=>{
        setUser({isUserLoggedIn:true, ...response})
      },
    })

  if(!isUserLoggedIn && loginQuery.isLoading) return <CircularProgress/>
  if(!isUserLoggedIn && loginQuery.isError) return <Navigate to="/error"/>
  if(isUserLoggedIn && loginQuery.isSuccess) return props.children
  else return <Navigate to="/login"/>
};