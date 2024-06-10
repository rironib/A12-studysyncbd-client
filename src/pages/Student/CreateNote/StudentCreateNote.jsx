import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth.jsx";
import {
    Button,
    Input,
    Text,
    Textarea,
    useBreakpointValue
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const StudentCreateNote = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const breakpoint = useBreakpointValue({
        base: "sm",
        sm: "md",
        md: "lg",
    });

    const onSubmit = async (data) => {
        try {
            const noteInfo = {
                userId: user?.uid,
                title: data.title,
                email: data.email.toLowerCase(),
                desc: data.desc,
                createdAt: new Date().toISOString()
            };

            const res = await axiosSecure.post('/api/notes/add', noteInfo);

            if (res.data.insertedId) {
                reset();
                toast.success("Note created successfully!");
                navigate('/student/notes');
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            toast.error("Failed to create note.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Create Note | StudySync</title>
            </Helmet>
            <main>
                <div className='mb-6 font-bold text-xl lg:text-3xl text-center text-violet-600'>
                    Create Note
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-6'>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Title</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("title", { required: true })}
                                placeholder='Enter Title'
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Email</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("email", { required: true })}
                                defaultValue={user?.email}
                                readOnly={Boolean(user?.email)}
                            />
                        </div>
                    </div>
                    <div>
                        <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Description</Text>
                        <Textarea
                            rows='10'
                            size={breakpoint}
                            {...register("desc", { required: true })}
                            placeholder='Description'
                        />
                    </div>
                    <Button size='lg' type='submit' width='full' colorScheme='teal'>
                        Create New Note
                    </Button>
                </form>
            </main>
        </>
    );
};

export default StudentCreateNote;