import {
    Button,
    Heading,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    Box, Divider, AbsoluteCenter
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {RiKeyFill, RiMailFill} from "react-icons/ri";
import {Link} from "react-router-dom";

const Login = () => {
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
                <Heading className='mb-12 text-center'>Login</Heading>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-6'>
                    <Stack spacing={4}>
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
                            Login
                        </Button>
                    </Stack>
                    <Box position='relative' py='2'>
                        <Divider />
                        <AbsoluteCenter bg='white' px='4'>
                            OR
                        </AbsoluteCenter>
                    </Box>
                    <Stack spacing={4} direction='row' align='center' mb='4'>
                        <Button bg='#0057e7' color='white' _hover={{color: 'gray.300'}} size='lg' width='full'>
                            Google
                        </Button>
                        <Button bg='#24292e' color='white' _hover={{color: 'gray.300'}} size='lg' width='full'>
                            Github
                        </Button>
                    </Stack>
                    <Text align='center'>
                        You don't have an account? <Link className='text-blue-700' to='/register'>Sign up</Link>
                    </Text>
                </form>
            </div>
        </main>
    );
};

export default Login;
