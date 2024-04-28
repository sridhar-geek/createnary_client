import axios from 'axios'

const BASEURL = 'http://localhost:4000/api'
export const axiosInstance = axios.create({baseURL:BASEURL})