import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { redirectToPage } from '../utils/utils';

// Create an Axios instance
const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000, // Set a timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add Authorization token
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getAuthToken(); // Retrieve the token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle responses globally
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized - redirect to login');
      // Handle logout or token refresh here
      redirectToPage('/login', false);
    }
    return Promise.reject(error);
  }
);

const getAuthToken = async () => {
  return localStorage.getItem('session_id');
};

export default axiosInstance;
