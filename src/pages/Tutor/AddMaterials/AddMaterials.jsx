import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth.jsx";
import { Button, Input, useBreakpointValue, Text } from "@chakra-ui/react";
import {useNavigate, useParams} from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { axiosPublic } from "../../../hooks/useAxiosPublic.jsx";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const TutorAddMaterials = () => {
    const { user } = useAuth() || {};
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const breakpoint = useBreakpointValue({ base: "sm", sm: "md", md: "lg" });

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        try {
            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: { 'content-type': 'multipart/form-data' }
            });

            if (res.data.success) {
                const materialInfo = {
                    title: data.title,
                    sessionId: id,
                    userId: user.uid,
                    email: user.email,
                    image: res.data.data.display_url,
                    link: data.link,
                    createdAt: new Date().toISOString()
                };

                const result = await axiosSecure.post('/api/material', materialInfo);
                if (result.data.insertedId) {
                    reset();
                    navigate('/tutor/materials');
                    toast.success(`${data.title} added successfully`);
                }
            } else {
                toast.error("Image upload failed");
            }
        } catch (error) {
            toast.error("An error occurred while uploading the material");
        }
    };

    return (
        <>
            <Helmet>
                <title>Upload Materials | StudySync</title>
            </Helmet>
            <main>
                <div className='mb-6 font-bold text-xl lg:text-3xl text-center text-violet-600'>
                    Upload Materials
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
                                defaultValue={user.email}
                                readOnly
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Image</Text>
                            <Input
                                type="file"
                                {...register("image", { required: true })}
                                size={breakpoint}
                            />
                        </div>
                        <div>
                            <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Session ID</Text>
                            <Input
                                type='text'
                                size={breakpoint}
                                {...register("sessionId", { required: true })}
                                defaultValue={id}
                                readOnly
                            />
                        </div>
                    </div>
                    <div>
                        <Text mb='4px' fontSize={breakpoint} fontWeight='bold'>Drive Link</Text>
                        <Input
                            type='text'
                            size={breakpoint}
                            {...register("link", { required: true })}
                            placeholder='Enter Drive Link'
                        />
                    </div>
                    <Button size='lg' type='submit' width='full' colorScheme='teal'>
                        Add Material
                    </Button>
                </form>
            </main>
        </>
    );
};

export default TutorAddMaterials;