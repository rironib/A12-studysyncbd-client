import {useQuery} from "@tanstack/react-query";
import {axiosPublic} from "./useAxiosPublic.jsx";

const useSessions = () => {
    const {data: sessions = [], isLoading, refetch, error} = useQuery({
        queryKey: ['sessions'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/sessions');
            return res.data;
        }
    });
    return [sessions, isLoading, refetch, error];
};

export default useSessions;
