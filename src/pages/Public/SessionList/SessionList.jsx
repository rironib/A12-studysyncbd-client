import {useQuery} from "@tanstack/react-query";
import {axiosPublic} from "../../../hooks/useAxiosPublic.jsx";
import Loading from "../../../components/Loading.jsx";
import ErrorAlert from "../../../components/Alert/ErrorAlert.jsx";
import {Avatar, Box, Button, Divider, Flex, Grid, Heading, Stack, Text, WrapItem} from "@chakra-ui/react";
import {Rating} from "@smastrom/react-rating";
import {RiArticleLine, RiTimeLine, RiUser3Line} from "react-icons/ri";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";

const SessionList = () => {
    const {data: sessions = [], isLoading, error} = useQuery({
        queryKey: ['sessions'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/sessions');
            return res.data;
        }
    });

    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return <ErrorAlert error={error}/>;
    }

    return (
        <>
            <Helmet>
                <title>All Sessions | StudySync</title>
            </Helmet>
            <main className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                <section className='mt-32 mb-20'>
                    <Stack mb='10' align='center' spacing={1}>
                        <Text fontSize='xl' color='blue'>Our Sessions List</Text>
                        <Heading className='font-lexend'>All Sessions</Heading>
                    </Stack>
                    <div>
                        <Grid className="grid-cols-3 gap-8">
                            {
                                sessions.map((session) => (
                                    <Box key={session._id} className='shadow rounded-lg'>
                                        <img alt='cover' src={session.image}
                                             className='rounded-xl'/>
                                        <div className='mt-2'>
                                            <div className='p-4 space-y-4'>
                                                <Flex className='items-center gap-2'>
                                                    <Rating style={{maxWidth: 110}} value={session.rating} readOnly/>
                                                    <span>({session.rating})</span>
                                                </Flex>
                                                <div className='font-bold text-2xl'>
                                                    {session.title}
                                                </div>
                                                <Flex spacing={4} direction='row' align='center'
                                                      className='gap-4 *:flex *:items-center *:gap-2'>
                                                    <div><RiUser3Line/> 0 Students</div>
                                                    <div><RiArticleLine/> 15 Lessons</div>
                                                    <div><RiTimeLine/> {session.sessionDuration}</div>
                                                </Flex>
                                            </div>
                                            <Divider/>
                                            <Flex className='justify-between p-4 py-2'>
                                                <Flex className='items-center gap-2'>
                                                    <WrapItem>
                                                        <Avatar size='sm' name='Dan Abrahmov'
                                                                src='https://bit.ly/dan-abramov'/>
                                                    </WrapItem>
                                                    <Text>{session.tutor}</Text>
                                                </Flex>
                                                <Link to={`/session/${session._id}`}>
                                                    <Button>Read More</Button>
                                                </Link>
                                            </Flex>
                                        </div>
                                    </Box>
                                ))
                            }
                        </Grid>
                    </div>
                </section>
            </main>
        </>
    );
};

export default SessionList;
