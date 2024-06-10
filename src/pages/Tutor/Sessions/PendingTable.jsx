import {Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import moment from "moment";

const PendingTable = ({sessions}) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Title</Th>
                        <Th>Created</Th>
                        <Th>Status</Th>
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
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default PendingTable;
