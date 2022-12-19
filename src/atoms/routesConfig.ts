import { Route } from "../types"
import { atom } from "recoil"

export const routes = atom<Array<Route>>({
    key:"routes",
    default:[{
        pageName:'Dashboard',
        path:'/',
        requiresAuthentication: true
    },{
        pageName:'Login',
        path:'/login',
        requiresAuthentication: false
    }]
})

export const settings = atom<Array<Route>>({
    key:"settings",
    default:[
        {
          pageName:'Profile', 
          path:'/profile',
          requiresAuthentication: true
        },{
          pageName:'Settings',
          path:'/settings',
          requiresAuthentication: true
        },{
          pageName:'Logout',
          path:'/logout',
          requiresAuthentication: true
        }]
})