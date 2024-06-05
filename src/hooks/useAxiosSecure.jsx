import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth.jsx";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logout} = useAuth();

    // Intercepting requests to add the authorization header
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    }, (err) => {
        return Promise.reject(err);
    })

    // Intercepts 401 & 403 status
    axiosSecure.interceptors.response.use((res) => {
        return res;
    },  async (err) => {
        const status = err.response.status;
        if (status === 401 || status === 403) {
            await logout();
            navigate('/login');
        }
        return Promise.reject(err);
    })

    return axiosSecure;
};

export default useAxiosSecure;
