import {useQuery} from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure.jsx";

const useNotes = () => {
    const axiosSecure = useAxiosSecure();
    const {data: notes = [], isLoading, refetch, error} = useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/student/notes');
            return res.data;
        }
    });
    return [notes, isLoading, refetch, error];
};

export default useNotes;