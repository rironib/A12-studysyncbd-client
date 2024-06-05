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
import {useContext, useState} from "react";
import {RiKeyFill, RiMailFill} from "react-icons/ri";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {toast} from "react-toastify";
import SocialLogin from "../../../components/Public/Auth/SocialLogin.jsx";

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn (email, password)
            .then(() => {
                toast.success('Login successfully');
                navigate(from, { replace: true });
            })
            .catch((err) => {
                if (err.message === "Firebase: Error (auth/invalid-credential)."){
                    toast.error("Email or Password is incorrect!");
                } else {
                    toast.error(err.message);
                }
            });
    }

    return (
        <main className='min-h-screen w-full bg-emerald-950 flex justify-center items-center'>
            <div className='w-2/5 mx-auto p-12 bg-white'>
                <Heading className='mb-12 text-center'>Login</Heading>
                <form onSubmit={handleLogin} className='grid gap-6'>
                    <Stack spacing={4}>
                        <InputGroup size='lg'>
                            <InputLeftElement color='gray.400' pointerEvents='none'>
                                <RiMailFill />
                            </InputLeftElement>
                            <Input type='email' name='email' placeholder='Email Address' required />
                        </InputGroup>

                        <InputGroup size='lg'>
                            <InputLeftElement pointerEvents='none' color='gray.400' fontSize='1.2em'>
                                <RiKeyFill />
                            </InputLeftElement>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                name='password'
                                placeholder='Enter password'
                                required
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
                    <SocialLogin/>
                    <Text align='center'>
                        You don't have an account? <Link className='font-medium text-teal-500' to='/register'>Sign up</Link>
                    </Text>
                </form>
            </div>
        </main>
    );
};

export default Login;
