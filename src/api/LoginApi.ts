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

const doLoginUri: string = '/auth/login'

const getUserUri: string = '/auth/user'

export const getUser = (bearer: string): Promise<User> => api.get(getUserUri+'/'+bearer).then(res=>res.data)

export const doLogin = ({user}: LoginRequest): Promise<LoginResponse> => api.post(doLoginUri, {username:user.username,password:user.password}).then(res=>res.data)
