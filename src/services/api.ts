import axios from 'axios'

export const api = axios.create({
  baseURL: `http://localhost:3000/api`
})

api.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'
