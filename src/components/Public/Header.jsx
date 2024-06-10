import {
    Avatar,
    Button,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useBreakpointValue
} from "@chakra-ui/react";
import {AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon} from "@chakra-ui/icons";
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";
import {toast} from "react-toastify";

const Header = () => {
    const {user, logOut} = useAuth();
    const navigate = useNavigate();
    const breakpoint = useBreakpointValue({ base: 'sm', md: 'md' });

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logout successfully");
                navigate('/login');
            })
            .catch((err) => toast.error(err));
    }

    return (
        <header className='w-full bg-slate-100 text-slate-900 fixed z-10 shadow'>
            <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto py-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <Link to='/'>
                            <Heading as='h1' size='xl'>StudySync</Heading>
                        </Link>
                    </div>
                    <div>

                    </div>
                    {
                        user ? (
                            <div className='flex items-center gap-2 lg:gap-4'>
                                <div className='hidden lg:block'>
                                    <Avatar size={breakpoint} name={user?.displayName} src={user?.photoURL} />
                                </div>
                                <Button onClick={() => navigate('/student/dashboard')} colorScheme='teal' size={breakpoint}>
                                    Dashboard
                                </Button>
                                <Button onClick={handleLogout} size={breakpoint} colorScheme='teal' variant='outline'>
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Stack direction='row' spacing={4} align='center'>
                                <Button onClick={() => navigate('/login')} size={breakpoint} colorScheme='teal' variant='solid'>
                                    Login
                                </Button>
                                <Button onClick={() => navigate('/register')} size={breakpoint} colorScheme='teal' variant='outline'>
                                    Sign up
                                </Button>
                            </Stack>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
