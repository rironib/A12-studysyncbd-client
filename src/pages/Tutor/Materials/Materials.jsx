import {useQuery} from "@tanstack/react-query";
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
import {useNavigate} from "react-router-dom";
import {EditIcon} from "@chakra-ui/icons";
import DeleteButton from "./DeleteButton.jsx";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import moment from "moment";

const TutorMaterials = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const {data: materials = [], isLoading, refetch, error} = useQuery({
        queryKey: ['materials'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/tutor/material');
            return res.data;
        }
    });

    if (isLoading) {
        return <Loading/>;
    } else if (error) {
        return <ErrorAlert error={error}/>;
    }

    return (
        <>
            <Helmet>
                <title>All Materials | StudySync</title>
            </Helmet>
            <main>
                <Heading className='mb-6 font-lexend text-center'>All Materials</Heading>
                <TableContainer>
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
                                        <Td>{idx + 1}</Td>
                                        <Td>
                                            <img src={item.image} alt={item.title} className='h-20' />
                                        </Td>
                                        <Td>{item.title}</Td>
                                        <Td>{item.sessionId}</Td>
                                        <Td>{moment(item.createdAt).format('MMMM D, YYYY')}</Td>
                                        <Td>
                                            <div className='flex gap-2'>
                                                <Button onClick={() => {
                                                    navigate(`/tutor/materials/update/${item._id}`)
                                                }} colorScheme='blue'>
                                                    <EditIcon/>
                                                </Button>
                                                <DeleteButton id={item?._id} refetch={refetch}/>
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

export default TutorMaterials;
