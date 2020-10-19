import axios from 'axios';

let baseUrl = 'http://localhost:8080/api/v1';


const AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
})

AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('user').token;
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})

export default AxiosInstance