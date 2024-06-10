import {
    Button,
    Heading,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack, Select
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {RiKeyFill, RiMailFill, RiUser6Fill} from "react-icons/ri";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {toast} from "react-toastify";
import {axiosPublic} from "../../../hooks/useAxiosPublic.jsx";
import {Helmet} from "react-helmet-async";

const Register = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }

    const { register, handleSubmit, reset} = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await createUser(data.email, data.password);
            await updateUser(data.name, data.photoURL);

            const userInfo = {
                uid: data.user?.uid,
                email: data.email.toLowerCase(),
                name: data.name,
                role: data.role,
                createdAt: new Date().toISOString()
            };

            const res = await axiosPublic.post('/api/users/add', userInfo);
            if (res.data._id) {
                reset();
                toast.success("Registration successful!!");
                navigate('/');
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <>
            <Helmet>
                <title>Create Account | StudySync</title>
            </Helmet>
            <main className='min-h-screen w-full p-6 bg-emerald-950 flex justify-center items-center'>
                <div className='lg:w-2/5 mx-auto p-6 lg:p-12 bg-white rounded-lg'>
                    <Heading className='mb-12 text-center'>Create New Account</Heading>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-6'>
                        <Stack spacing={4}>
                            <InputGroup size='lg'>
                                <InputLeftElement color='gray.400' pointerEvents='none'>
                                    <RiUser6Fill/>
                                </InputLeftElement>
                                <Input type='text' {...register("name", {required: true})} placeholder='Your Name'/>
                            </InputGroup>

                            <Select {...register("role", {required: true})} size='lg' placeholder='Sign up as'>
                                <option value='admin'>Admin</option>
                                <option value='tutor'>Tutor</option>
                                <option value='student'>Student</option>
                            </Select>

                            <InputGroup size='lg'>
                                <InputLeftElement color='gray.400' pointerEvents='none'>
                                    <RiMailFill/>
                                </InputLeftElement>
                                <Input type='email' {...register("email", {required: true})}
                                       placeholder='Email Address'/>
                            </InputGroup>

                            <InputGroup size='lg'>
                                <InputLeftElement pointerEvents='none' color='gray.400' fontSize='1.2em'>
                                    <RiKeyFill/>
                                </InputLeftElement>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    {...register("password", {required: true})}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button size='lg' type='submit' width='w-full' colorScheme='teal'>
                                Sign up
                            </Button>
                        </Stack>
                        <Text align='center'>
                            Already have an account? <Link className='font-medium text-teal-500'
                                                           to='/login'>Login</Link>
                        </Text>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Register;
