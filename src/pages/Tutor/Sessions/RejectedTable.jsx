import {Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {toast} from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";

const RejectedTable = ({sessions, refetch}) => {
    const axiosSecure = useAxiosSecure();

    const handleRequest = (id) => {
        axiosSecure.patch(`/api/sessions/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success("Reviews request successfully!");
                    refetch();
                }
            })
    }

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Title</Th>
                        <Th>Status</Th>
                        <Th>Reason</Th>
                        <Th>Feedback</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        sessions.map((session, idx) => (
                            <Tr key={session._id}>
                                <Td>{idx + 1}</Td>
                                <Td>{session.title}</Td>
                                <Td className='capitalize'>{session?.status}</Td>
                                <Td>{session.rejectionReason}</Td>
                                <Td>{session.feedback}</Td>
                                <Td>
                                    <Button onClick={() => handleRequest(session._id)} isDisabled={session?.status !== 'rejected'}>Request Again</Button>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default RejectedTable;
