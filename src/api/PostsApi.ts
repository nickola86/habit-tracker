import axios from 'axios'
import Endpoints from './Endpoints'

const bearer = ""

const api = axios.create({
    baseURL: Endpoints.baseURL,
    headers:{
        'Authorization': `Bearer ${bearer}`
    }
})

const uri: string = '/posts'

export const getPosts = () => api.get(uri).then(res=>res.data)

export const getPost = (id: number) => api.get(`${uri}/${id}`).then(res=>res.data)

export const updatePost = ({id, ...updatedPost}: any) => api.put(`${uri}/${id}, updatedPost`).then(res=>res.data)