import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {toast} from "react-toastify";
import Loading from "../../../components/Shared/Loading.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";
import {Helmet} from "react-helmet-async";
import {
    Avatar,
    Button,
    Heading,
    Input,
    Select,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";

const AdminUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [searchQuery, setSearchQuery] = useState('');
    const [queryParams, setQueryParams] = useState('');

    const { data: users = [], isLoading, refetch, error } = useQuery({
        queryKey: ['users', queryParams],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/admin/users', {
                params: { search: queryParams }
            });
            return res.data;
        },
        enabled: false
    });

    useEffect(() => {
        refetch();
    }, [queryParams, refetch]);


    const handleSearch = () => {
        setQueryParams(searchQuery);
    };

    const handlePromote = (e) => {
        e.preventDefault();
        const userId = e.target.userId.value;
        const userRole = e.target.role.value;
        axiosSecure.patch(`/api/admin/users/${userId}`, {role: userRole})
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success("User promote successfully!");
                } else {
                    toast.error("User promote failed!");
                }
            })
            .catch(err => toast.error(err.message));
    }

    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return <ErrorAlert error={error}/>;
    }

    return (
        <>
            <Helmet>
                <title>All Users | StudySync</title>
            </Helmet>
            <main>
                <Heading className='mb-6 font-lexend text-center'>All Users</Heading>
                <form className='mb-4 lg:w-1/3 mx-auto flex gap-4'>
                    <Input
                        name='search'
                        placeholder='Search by name or email'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button onClick={handleSearch}>Search</Button>
                </form>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Avatar</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Current Role</Th>
                                <Th>Promote To</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users.map((user, idx) => (
                                    <Tr key={user._id}>
                                        <Td>{idx + 1}</Td>
                                        <Td>
                                            <Avatar name={user?.name} />
                                            </Td>
                                        <Td>{user?.name}</Td>
                                        <Td>{user?.email}</Td>
                                        <Td className='capitalize'>{user?.role}</Td>
                                        <Td>
                                            <form onSubmit={handlePromote} className='flex gap-2'>
                                                <input name='userId' defaultValue={user._id} hidden/>
                                                <Select name='role' defaultValue=''>
                                                    <option value='' disabled>Select Role</option>
                                                    <option value='student'>Student</option>
                                                    <option value='tutor'>Tutor</option>
                                                    <option value='admin'>Admin</option>
                                                </Select>
                                                <Button type='submit'>
                                                    Promote
                                                </Button>
                                            </form>
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

export default AdminUsers;
