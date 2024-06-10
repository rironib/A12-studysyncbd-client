import {useQuery} from "@tanstack/react-query";
import {axiosPublic} from "./useAxiosPublic.jsx";

const useReviews = () => {
    const {data: reviews = [], isLoading, refetch, error} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/reviews');
            return res.data;
        }
    });
    return [reviews, isLoading, refetch, error];
};

export default useReviews;
