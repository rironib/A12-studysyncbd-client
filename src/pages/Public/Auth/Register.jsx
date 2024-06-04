import {
    Button,
    Heading,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {RiImageFill, RiKeyFill, RiMailFill, RiUser6Fill} from "react-icons/ri";
import {Link} from "react-router-dom";

const Register = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <main className='min-h-screen w-full bg-emerald-950 flex justify-center items-center'>
            <div className='w-2/5 mx-auto p-12 bg-white'>
                <Heading className='mb-12 text-center'>Create New Account</Heading>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-6'>
                    <Stack spacing={4}>
                        <InputGroup size='lg'>
                            <InputLeftElement color='gray.400' pointerEvents='none'>
                                <RiUser6Fill />
                            </InputLeftElement>
                            <Input type='text' {...register("name", {required: true})} placeholder='Your Name' />
                        </InputGroup>

                        <InputGroup size='lg'>
                            <InputLeftElement color='gray.400' pointerEvents='none'>
                                <RiImageFill />
                            </InputLeftElement>
                            <Input type='text' {...register("photo", {required: true})} placeholder='Profile photo link' />
                        </InputGroup>

                        <InputGroup size='lg'>
                            <InputLeftElement color='gray.400' pointerEvents='none'>
                                <RiMailFill />
                            </InputLeftElement>
                            <Input type='email' {...register("email", {required: true})} placeholder='Email Address' />
                        </InputGroup>

                        <InputGroup size='lg'>
                            <InputLeftElement pointerEvents='none' color='gray.400' fontSize='1.2em'>
                                <RiKeyFill />
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
                        Already have an account? <Link className='text-blue-700' to='/login'>Login</Link>
                    </Text>
                </form>
            </div>
        </main>
    );
};

export default Register;
