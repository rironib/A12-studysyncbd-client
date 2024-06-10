import {Helmet} from "react-helmet-async";
import {Alert, AlertIcon, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import moment from "moment";
import {useLoaderData} from "react-router-dom";

const StudentMaterials = () => {
    const materials = useLoaderData();

    return (
        <>
            <Helmet>
                <title>All Materials | StudySync</title>
            </Helmet>
            <main>
                <Heading className='mb-6 font-lexend text-center'>All Materials</Heading>
                {
                    materials.length > 0 && (
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>#</Th>
                                        <Th>Image</Th>
                                        <Th>Title</Th>
                                        <Th>Created</Th>
                                        <Th>Action</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        materials.map((item, idx) => (
                                            <Tr key={item._id}>
                                                <Td>{idx + 1}</Td>
                                                <Td>
                                                    <img src={item.image} alt={item.title} className='h-20' />
                                                </Td>
                                                <Td>{item.title}</Td>
                                                <Td>{moment(item.createdAt).format('MMMM D, YYYY')}</Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )
                }
                {
                    materials.length <= 0 && (
                        <Alert status='error'>
                            <AlertIcon />
                            No material found.
                        </Alert>
                    )
                }
            </main>
        </>
    );
};

export default StudentMaterials;
