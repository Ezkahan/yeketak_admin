import axios from "axios";
import Cookie from 'js-cookie'

const token = Cookie.get('yeketak_token')

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    // baseURL: 'https://yeketak.com.tm/api',
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
    },
    // withCredentials: true,
})

api.interceptors.request.use(config => {
    config.headers.Authorization = token ? `Bearer ${token}` : null

    return config
})

export default api