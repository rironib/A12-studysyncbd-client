import Loading from "../../../components/Shared/Loading.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";
import {Helmet} from "react-helmet-async";
import {
    Button,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import useBookedSession from "../../../hooks/useBookedSession.jsx";
import {useNavigate} from "react-router-dom";

const StudentSessions = () => {
    const navigate = useNavigate();
    const [bookedSessions, isLoading, ,error] = useBookedSession();

    if (isLoading) {
        return <Loading/>;
    } else if (error) {
        return <ErrorAlert error={error}/>;
    }

    return (
        <>
            <Helmet>
                <title>Booked Sessions | StudySync</title>
            </Helmet>
            <main>
                <Heading className='mb-6 font-lexend text-center'>Booked Sessions</Heading>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Title</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                bookedSessions.map((session, idx) => (
                                    <Tr key={session._id}>
                                        <Td>{idx + 1}</Td>
                                        <Td>{session.title}</Td>
                                        <Td>
                                            <div className='flex gap-2'>
                                                <Button onClick={() => navigate(`/session/${session.sessionId}`)}>
                                                    View Session
                                                </Button>
                                                <Button onClick={() => navigate(`/student/materials/${session.sessionId}`)}>
                                                    View Materials
                                                </Button>
                                            </div>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </main>
        </>
    );
};

export default StudentSessions;
