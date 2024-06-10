import {Button, Heading, Stack, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";
import Loading from "../../../components/Shared/Loading.jsx";
import Card from "../../../components/Shared/Card.jsx";
import useSessions from "../../../hooks/useSessions.jsx";

const SessionSection = () => {
    const navigate = useNavigate();
    const [sessions, isLoading, , error] = useSessions();
    const filteredSessions = sessions.filter((session) => session.status === "approved");
    const displayedSessions = filteredSessions.slice(0, 6);

    if (isLoading) {
        return <Loading/>;
    } else if (error) {
        return <ErrorAlert error={error}/>;
    }

    return (
        <section className='mt-12 mb-20'>
            <Stack mb='10' align='center' spacing={1}>
                <Text fontSize='xl' color='blue'>Our Sessions List</Text>
                <Heading className='font-lexend'>Most Popular Sessions</Heading>
            </Stack>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {displayedSessions.map((session) => <Card key={session._id} session={session}/>)}
            </div>
            { filteredSessions.length > 6 && (
                <div className='mt-6 text-center'>
                    <Button onClick={() => navigate('/sessions')} size='lg'>See All Sessions</Button>
                </div>
            )}
        </section>
    );
};

export default SessionSection;