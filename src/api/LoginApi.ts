import axios from 'axios'
import Endpoints from './Endpoints'
import {User} from "../components/types";

export interface LoginRequest{
    user: User
}
export interface LoginResponse{
    user: User,
    access_token: string
}

const api = axios.create({
    baseURL: Endpoints.baseURL,
    withCredentials:false
})

const uri: string = '/auth/login'

export const doLogin = ({user}: LoginRequest): Promise<LoginResponse> => api.post(uri, {username:user.username,password:user.password}).then(res=>res.data)
