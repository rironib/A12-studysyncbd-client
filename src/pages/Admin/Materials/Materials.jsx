import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Shared/Loading.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";
import { Helmet } from "react-helmet-async";
import {
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import DeleteButton from "./DeleteButton.jsx";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import moment from "moment";
import ReactPaginate from 'react-paginate';

const AdminMaterials = () => {
    const axiosSecure = useAxiosSecure();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const { data, isLoading, refetch, error } = useQuery({
        queryKey: ['materials', currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/materials?page=${currentPage + 1}&limit=${itemsPerPage}`);
            return res.data;
        }
    });

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    if (isLoading) {
        return <Loading />;
    } else if (error) {
        return <ErrorAlert error={error} />;
    }

    const { materials, totalPages } = data;

    return (
        <>
            <Helmet>
                <title>All Materials | StudySync</title>
            </Helmet>
            <main>
                <Heading className='mb-6 font-lexend text-center'>All Materials</Heading>
                <TableContainer className='mb-8'>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Image</Th>
                                <Th>Title</Th>
                                <Th>Session ID</Th>
                                <Th>Created</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                materials.map((item, idx) => (
                                    <Tr key={item._id}>
                                        <Td>{currentPage * itemsPerPage + idx + 1}</Td>
                                        <Td>
                                            <img src={item.image} alt={item.title} className='h-20' />
                                        </Td>
                                        <Td>{item.title}</Td>
                                        <Td>{item.sessionId}</Td>
                                        <Td>{moment(item.createdAt).format('MMMM D, YYYY')}</Td>
                                        <Td>
                                            <DeleteButton id={item?._id} refetch={refetch} />
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                <div className='flex justify-center my-4'>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                    />
                </div>
            </main>
        </>
    );
};

export default AdminMaterials;