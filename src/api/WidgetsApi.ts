import axios from 'axios'
import Endpoints from './Endpoints'

let config: Object = {}

const api = axios.create({
  baseURL: Endpoints.baseURL
})

const uri = '/widgets'

export const findByUserAndHabitId = (userId: number, habitId: number) => api.get(`${uri}?habitId=${habitId}&userId=${userId}`,config).then(res=>res.data)

export default (bearer: string) => {
  config = {
    headers: {
      'Authorization': `Bearer ${bearer}`
    }
  }
}