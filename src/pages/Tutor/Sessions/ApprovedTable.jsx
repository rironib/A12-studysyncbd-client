import {Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import moment from "moment";

const ApprovedTable = ({sessions}) => {
    const navigate = useNavigate();


    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Title</Th>
                        <Th>Created</Th>
                        <Th>Status</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        sessions.map((session, idx) => (
                            <Tr key={session._id}>
                                <Td>{idx + 1}</Td>
                                <Td>{session.title}</Td>
                                <Td>{moment(session.createdAt).format('MMMM D, YYYY')}</Td>
                                <Td className='capitalize'>{session?.status}</Td>
                                <Td>
                                    <Button onClick={() => navigate(`/tutor/materials/add/${session._id}`)}>
                                        Upload Material
                                    </Button>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default ApprovedTable;
