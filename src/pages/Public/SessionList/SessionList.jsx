import {useQuery} from "@tanstack/react-query";
import {axiosPublic} from "../../../hooks/useAxiosPublic.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";
import {Avatar, Box, Button, Divider, Flex, Grid, Heading, Stack, Text, WrapItem} from "@chakra-ui/react";
import {Rating} from "@smastrom/react-rating";
import {RiArticleLine, RiTimeLine, RiUser3Line} from "react-icons/ri";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Loading from "../../../components/Shared/Loading.jsx";
import Card from "../../../components/Shared/Card.jsx";
import useSessions from "../../../hooks/useSessions.jsx";

const SessionList = () => {
    const [sessions, isLoading, , error] = useSessions();
    const filteredSessions = sessions.filter((session) => session.status === "approved");

    if (isLoading) {
        return <Loading/>;
    } else if (error) {
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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredSessions.map((session) => <Card key={session._id} session={session}/>)}
                    </div>
                </section>
            </main>
        </>
    );
};

export default SessionList;
