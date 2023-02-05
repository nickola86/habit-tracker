import axios from 'axios'
import Endpoints from './Endpoints'

let config: Object = {}

const api = axios.create({
  baseURL: Endpoints.baseURL
})

const uri = '/badges'

export const findByUser = (userId: number) => api.get(`${uri}?userId=${userId}`,config).then(res=>res.data)

export default (bearer: string) => {
  config = {
    headers: {
      'Authorization': `Bearer ${bearer}`
    }
  }
}
