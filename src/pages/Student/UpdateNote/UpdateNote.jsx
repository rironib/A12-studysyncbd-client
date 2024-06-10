import {Helmet} from "react-helmet-async";
import {Button, Input, Text, Textarea, useBreakpointValue} from "@chakra-ui/react";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {useLoaderData, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

const UpdateNote = () => {
    const note = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const breakpoint = useBreakpointValue({ base: "sm", sm: "md", md: "lg" });

    const onSubmit = async (data) => {
        try {
            const noteInfo = {
                title: data.title,
                desc: data.desc,
                updatedAt: new Date().toISOString()
            };

            const res = await axiosSecure.patch(`/api/notes/${note._id}`, noteInfo);

            if (res.data.modifiedCount > 0) {
                reset();
                toast.success("Note updated successfully!");
                navigate('/student/notes');
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            toast.error("Failed to update note.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Update Note | StudySync</title>
            </Helmet>
            <main>
                <div className='mb-6 font-bold text-xl lg:text-3xl text-center text-violet-600'>
                    Update Note
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-6'>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Title</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("title", { required: true })}
                                defaultValue={note?.title}
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Email</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("email", { required: true })}
                                defaultValue={note?.email}
                                readOnly
                            />
                        </div>
                    </div>
                    <div>
                        <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Description</Text>
                        <Textarea
                            rows='10'
                            size={breakpoint}
                            {...register("desc", { required: true })}
                            defaultValue={note?.desc}
                        />
                    </div>
                    <Button size='lg' type='submit' width='full' colorScheme='teal'>
                        Update Note
                    </Button>
                </form>
            </main>
        </>
    );
};

export default UpdateNote;
