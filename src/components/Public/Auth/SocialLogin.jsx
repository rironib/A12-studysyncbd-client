import useAuth from "../../../hooks/useAuth.jsx";
import {axiosPublic} from "../../../hooks/useAxiosPublic.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {Button, Stack} from "@chakra-ui/react";

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    role: 'student',
                    createAt: new Date().toISOString()
                }
                axiosPublic.post('/api/users/add', userInfo)
                    .then(() => {
                        toast.success('Successfully logged in!');
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <Stack spacing={4} direction='row' align='center' mb='4'>
            <Button onClick={handleGoogleLogin} bg='#0057e7' color='white' _hover={{}} size='lg' width='full'>
                Google
            </Button>
            <Button onClick='handleGithubLogin' bg='#24292e' color='white' _hover={{}} size='lg' width='full'>
                Github
            </Button>
        </Stack>
    );
};

export default SocialLogin;
