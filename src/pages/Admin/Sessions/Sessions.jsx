import {Button, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr,} from "@chakra-ui/react";
import Loading from "../../../components/Shared/Loading.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";
import useSessions from "../../../hooks/useSessions.jsx";
import RejectButton from "./RejectButton.jsx";
import ApproveButton from "./ApproveButton.jsx";
import DeleteButton from "./DeleteButton.jsx";
import {Helmet} from "react-helmet-async";
import {EditIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";

const AdminSessions = () => {
    const navigate = useNavigate();
    const [sessions, isLoading, refetch, error] = useSessions();

    if (isLoading) {
        return <Loading />;
    } else if (error) {
        return <ErrorAlert error={error}/>;
    }

    return (
        <>
            <Helmet>
                <title>All Sessions | StudySync</title>
            </Helmet>
            <main>
                <Heading className='mb-6 font-lexend text-center'>All Sessions</Heading>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Title</Th>
                                <Th>Fee</Th>
                                <Th>Status</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {sessions.map((session, idx) => (
                                <Tr key={session._id}>
                                    <Td>{idx + 1}</Td>
                                    <Td>{session.title}</Td>
                                    <Td>${session.fee}</Td>
                                    <Td className='capitalize'>{session?.status}</Td>
                                    <Td className='space-x-2'>
                                        {
                                            session.status === 'pending' ? (
                                                    <>
                                                        <ApproveButton id={session?._id} refetch={refetch}/>
                                                        <RejectButton id={session?._id} refetch={refetch}/>
                                                    </>
                                            ) : (
                                                <>
                                                    <Button onClick={()=>{navigate(`/admin/update/${session._id}`)}} colorScheme='blue'>
                                                        <EditIcon/>
                                                    </Button>
                                                    <DeleteButton id={session?._id} refetch={refetch}/>
                                                </>
                                            )
                                        }
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </main>
        </>
    );
};

export default AdminSessions;
