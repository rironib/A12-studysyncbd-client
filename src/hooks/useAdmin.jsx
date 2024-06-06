import useAuth from "./useAuth.jsx";
import useAxiosSecure from "./useAxiosSecure.jsx";
import {useQuery} from "@tanstack/react-query";

const useAdmin = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/users/admin/${user.email}`)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
