import axios from 'axios'
export const Axios = axios.create({
  baseURL:import.meta.env.VITE_APP_BASE_URL,
})

Axios.interceptors.request.use((config)=>{
  return config
},err=>{
  Promise.reject(err)
})
Axios.interceptors.response.use((res)=>{
  return res
},err=>{
  Promise.reject(err)
})