import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://studysyncbd.vercel.app',
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;