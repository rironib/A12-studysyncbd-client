import {useLoaderData, useNavigate} from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {useForm} from "react-hook-form";
import {Button, Input, Select, Text, Textarea, useBreakpointValue} from "@chakra-ui/react";
import {toast} from "react-toastify";
import {Helmet} from "react-helmet-async";

const UpdateSession = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const session = useLoaderData();
    const {_id, title, tutor, email, desc, registrationStart, registrationEnd, classStart, classEnd, duration, fee, status, info} = session;

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
                status: data.status,
                info: data.info
            };

            const res = await axiosSecure.patch(`/api/sessions/update/${_id}`, sessionInfo);
            if (res.data.modifiedCount > 0) {
                reset();
                toast.success("Session updated successfully!");
                navigate('/admin/sessions');
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            toast.error(toast.error(err.message));
        }
    };

    return (
        <>
            <Helmet>
                <title>Update Sessions | StudySync</title>
            </Helmet>
            <main>
                <div className='mb-6 font-bold text-xl lg:text-3xl text-center text-violet-600'>
                    Update Sessions
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-6'>
                    <div>
                        <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Session Title</Text>
                        <Input
                            type='text'
                            size={breakpoint}
                            {...register("title", {required: true})}
                            defaultValue={title}
                        />
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Tutor Name</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("tutor", {required: true})}
                                defaultValue={tutor}
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Tutor Email</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("email", {required: true})}
                                defaultValue={email}
                            />
                        </div>
                    </div>
                    <div>
                        <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Description</Text>
                        <Textarea
                            size={breakpoint}
                            {...register("desc", {required: true})}
                            defaultValue={desc}
                        />
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Registration Start Date</Text>
                            <Input
                                type='date'
                                size={breakpoint}
                                {...register("registrationStart", {required: true})}
                                defaultValue={registrationStart}
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Registration End Date</Text>
                            <Input
                                type='date'
                                size={breakpoint}
                                {...register("registrationEnd", {required: true})}
                                defaultValue={registrationEnd}
                            />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Class Start Date</Text>
                            <Input
                                type='date'
                                size={breakpoint}
                                {...register("classStart", {required: true})}
                                defaultValue={classStart}
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Class End Date</Text>
                            <Input
                                type='date'
                                size={breakpoint}
                                {...register("classEnd", {required: true})}
                                defaultValue={classEnd}
                            />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Session Duration</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("duration", {required: true})}
                                defaultValue={duration}
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Registration Fee</Text>
                            <Input
                                type='number'
                                size={breakpoint}
                                {...register("fee", {required: true})}
                                defaultValue={fee}
                            />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Session Status</Text>
                            <Select
                                {...register("status", {required: true})}
                                defaultValue={status}
                                size={breakpoint}
                            >
                                <option value='' disabled>Select Status</option>
                                <option value='approved'>Approved</option>
                                <option value='pending'>Pending</option>
                                <option value='rejected'>Rejected</option>
                            </Select>
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Other Necessary Info</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("info")}
                                defaultValue={info}
                            />
                        </div>
                    </div>
                    <Button size='lg' type='submit' width='w-full' colorScheme='teal'>
                        Update Session
                    </Button>
                </form>
            </main>
        </>
    );
};

export default UpdateSession;
