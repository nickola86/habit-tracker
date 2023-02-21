import axios from 'axios'
import Endpoints from './Endpoints'

let config: Object = {}

const api = axios.create({
  baseURL: Endpoints.baseURL
})

const uri = '/habits'

export const findByUser = (userId: number) => api.get(`${uri}?userId=${userId}`,config).then(res=>res.data)

export const findByUserAndHabitId = (userId: number, habitId: number) => api.get(`${uri}?id=${habitId}&userId=${userId}`,config).then(res=>res.data[0]||{})

export default (bearer: string) => {
  config = {
    headers: {
      'Authorization': `Bearer ${bearer}`
    }
  }
}
