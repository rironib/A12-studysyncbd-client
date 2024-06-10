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

const TutorCreateSessions = () => {
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
            const sessionInfo = {
                title: data.title,
                tutor: data.tutor,
                email: data.email.toLowerCase(),
                desc: data.desc,
                registrationStart: data.registrationStart,
                registrationEnd: data.registrationEnd,
                classStart: data.classStart,
                classEnd: data.classEnd,
                duration: data.duration,
                fee: data.fee,
                info: data.info,
                status: 'pending',
                createdAt: new Date().toISOString()
            };

            const res = await axiosSecure.post('/api/sessions/add', sessionInfo);

            if (res.data.insertedId) {
                reset();
                toast.success("Session created successfully!");
                navigate('/tutor/sessions');
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            toast.error("Failed to create session. Please try again.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Create Sessions | StudySync</title>
            </Helmet>
            <main>
                <div className='mb-6 font-bold text-xl lg:text-3xl text-center text-violet-600'>
                    Create Sessions
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-6'>
                    <div>
                        <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Session Title</Text>
                        <Input
                            type='text'
                            size={breakpoint}
                            {...register("title", { required: true })}
                            placeholder='Session Title'
                        />
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Tutor Name</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("tutor", { required: true })}
                                defaultValue={user?.displayName}
                                readOnly
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Tutor Email</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("email", { required: true })}
                                defaultValue={user?.email}
                                readOnly
                            />
                        </div>
                    </div>
                    <div>
                        <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Session Description</Text>
                        <Textarea
                            size={breakpoint}
                            {...register("desc", { required: true })}
                            placeholder='Session Description'
                        />
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Registration Start Date</Text>
                            <Input
                                type='date'
                                size={breakpoint}
                                {...register("registrationStart", { required: true })}
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Registration End Date</Text>
                            <Input
                                type='date'
                                size={breakpoint}
                                {...register("registrationEnd", { required: true })}
                            />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Class Start Date</Text>
                            <Input
                                type='date'
                                size={breakpoint}
                                {...register("classStart", { required: true })}
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Class End Date</Text>
                            <Input
                                type='date'
                                size={breakpoint}
                                {...register("classEnd", { required: true })}
                            />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Session Duration</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("duration", { required: true })}
                                placeholder='x hours'
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Registration Fee</Text>
                            <Input
                                type='number'
                                size={breakpoint}
                                {...register("fee", { required: true })}
                                defaultValue='0'
                                readOnly
                            />
                        </div>
                    </div>
                    <div>
                        <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Any Other Necessary Info</Text>
                        <Textarea
                            size={breakpoint}
                            {...register("info")}
                            placeholder='Any other necessary info'
                        />
                    </div>
                    <Button size='lg' type='submit' width='w-full' colorScheme='teal'>
                        Create New Session
                    </Button>
                </form>
            </main>
        </>
    );
};

export default TutorCreateSessions;
