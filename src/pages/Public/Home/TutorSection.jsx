import {Stack, Heading, Text, Avatar} from "@chakra-ui/react";
import {useQuery} from "@tanstack/react-query";
import {axiosPublic} from "../../../hooks/useAxiosPublic.jsx";
import Loading from "../../../components/Shared/Loading.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";
import useUsers from "../../../hooks/useUsers.jsx";

const TutorSection = () => {
    const [users, isLoading, refetch, error] = useUsers();
    // const {data: tutors = [], isLoading, error} = useQuery({
    //     queryKey: ['tutors'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/api/tutors');
    //         return res.data;
    //     }
    // });

    const tutors = users.filter((user) => user.role === 'tutor');

    if (isLoading) {
        return <Loading />;
    } else if (error) {
        return <ErrorAlert error={error}/>;
    }

    return (
        <section className='mt-12 mb-20'>
            <Stack mb='10' align='center' spacing={1}>
                <Text fontSize='xl' color='blue'>Talented Instructors</Text>
                <Heading>Our Expert Instructors</Heading>
            </Stack>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {tutors.map((tutor) => (
                        <div key={tutor._id} className="flex flex-col items-center gap-6 p-8 border rounded-lg">
                            <Avatar size='2xl' name={tutor.name} src={tutor?.avatar} />
                            <div className='text-center space-y-2'>
                                <div className="font-bold text-2xl">{tutor.name}</div>
                                <div className="font-medium text-lg capitalize">{tutor.role}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TutorSection;
