import axios from 'axios'

const api = axios.create({
   baseURL: 'http://67.205.161.202/jumpparkapi/public/api/',
   timeout: 8000
})

export default api
