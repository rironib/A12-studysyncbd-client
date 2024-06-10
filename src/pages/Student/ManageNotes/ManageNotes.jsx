import { useState } from 'react';
import Loading from "../../../components/Shared/Loading.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";
import { Helmet } from "react-helmet-async";
import { Button, Heading, Divider } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { EditIcon } from "@chakra-ui/icons";
import { RiCalendarLine, RiStickyNoteAddLine } from "react-icons/ri";
import DeleteButton from "./DeleteButton.jsx";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from 'react-paginate';

const StudentManageNotes = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const { data, isLoading, refetch, error } = useQuery({
        queryKey: ['notes', currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/student/notes?page=${currentPage + 1}&limit=${itemsPerPage}`);
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

    const { notes, totalPages } = data;

    return (
        <>
            <Helmet>
                <title>All Notes | StudySync</title>
            </Helmet>
            <main>
                <Heading className='mb-6 font-lexend text-center'>All Notes</Heading>
                <div className='grid lg:grid-cols-2 gap-6 mb-12'>
                    {notes.map((note, idx) => (
                        <div key={idx} className='grid gap-6 p-6 border rounded-lg'>
                            <div className='flex justify-between items-center'>
                                <div className='text-2xl font-semibold'>{note.title}</div>
                                <div className='flex gap-2'>
                                    <Button onClick={() => { navigate(`/student/note/${note._id}`) }} colorScheme='blue'>
                                        <EditIcon />
                                    </Button>
                                    <DeleteButton id={note?._id} refetch={refetch} />
                                </div>
                            </div>
                            <p className='text-slate-600'>{note.desc}</p>
                            <Divider />
                            <div className='flex justify-end items-center gap-2'>
                                <RiCalendarLine />
                                {new Date(note.createdAt).toLocaleDateString()}
                            </div>
                        </div>
                    ))}
                </div>
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
                <div className='fixed bottom-4 lg:bottom-10 right-4 lg:right-10'>
                    <Link to='/student/create-note'>
                        <Button colorScheme='teal' fontSize='1.25rem' size='md'>
                            <RiStickyNoteAddLine />
                        </Button>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default StudentManageNotes;