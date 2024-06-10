import {useQuery} from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure.jsx";

const useBookedSession = () => {
    const axiosSecure = useAxiosSecure();
    const {data: bookedSessions = [], isLoading, refetch, error} = useQuery({
        queryKey: ['bookedSessions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/student/booked-sessions');
            return res.data;
        }
    });
    return [bookedSessions, isLoading, refetch, error];
};

export default useBookedSession;
