import axios from 'axios'

const instance = axios.create({
    baseURL: "https://blog-backend-124.herokuapp.com/"
})

export function getToken(): string {
    const token = localStorage.getItem('token')
    return token ? token : ''
}

instance.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = getToken()
    }
    return config
})

export default instance