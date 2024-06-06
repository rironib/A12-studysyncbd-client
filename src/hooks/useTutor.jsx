import useAuth from "./useAuth.jsx";
import useAxiosSecure from "./useAxiosSecure.jsx";
import {useQuery} from "@tanstack/react-query";

const useTutor = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isTutor, isPending: isTutorLoading} = useQuery({
        queryKey: ['isTutor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/users/tutor/${user.email}`)
            return res.data?.tutor;
        }
    })
    return [isTutor, isTutorLoading]
};

export default useTutor;
