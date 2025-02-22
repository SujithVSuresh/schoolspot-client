import axios from 'axios';
import { store } from '../store';



const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const {admin} = store.getState()

        const userType = config.headers['x-role']

        let token = null

        if(userType == 'admin'){
            token = admin?.accessToken
        }

        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config

    },
    (error) => Promise.reject(error)
)

export default axiosInstance