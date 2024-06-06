import useAuth from "./useAuth.jsx";
import useAxiosSecure from "./useAxiosSecure.jsx";
import {useQuery} from "@tanstack/react-query";

const useTutor = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isStudent, isPending: isStudentLoading} = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/users/student/${user.email}`)
            return res.data?.student;
        }
    })
    return [isStudent, isStudentLoading]
};

export default useTutor;
