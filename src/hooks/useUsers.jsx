import {useQuery} from "@tanstack/react-query";
import {axiosPublic} from "./useAxiosPublic.jsx";

const useUsers = () => {
    const {data: users = [], isLoading, refetch, error} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/users');
            return res.data;
        }
    });
    return [users, isLoading, refetch, error];
};

export default useUsers;
