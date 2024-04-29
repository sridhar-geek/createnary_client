import axios from 'axios'

const BASEURL = import.meta.env.VITE_APP_SERVER_URL;
export const axiosInstance = axios.create({baseURL:BASEURL})