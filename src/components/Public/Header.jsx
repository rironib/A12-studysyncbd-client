import {Avatar, Button, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack} from "@chakra-ui/react";
import {AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon} from "@chakra-ui/icons";
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";
import {toast} from "react-toastify";

const Header = () => {
    const {user, logOut} = useAuth();
    const navigate = useNavigate();

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
                        <div className='lg:hidden'>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                />
                                <MenuList>
                                    <MenuItem icon={<AddIcon />} command='⌘T'>
                                        New Tab
                                    </MenuItem>
                                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                                        New Window
                                    </MenuItem>
                                    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                                        Open Closed Tab
                                    </MenuItem>
                                    <MenuItem icon={<EditIcon />} command='⌘O'>
                                        Open File...
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                        <Link to='/'>
                            <Heading as='h1' size='xl'>StudySync</Heading>
                        </Link>
                    </div>
                    <div>

                    </div>
                    {
                        user ? (
                            <Stack direction='row' spacing={4} align='center'>
                                <Avatar size='md' name={user?.displayName} src={user?.photoURL} />
                                <Button onClick={() => navigate('/dashboard/home')} colorScheme='teal' variant='solid'>
                                    Dashboard
                                </Button>
                                <Button onClick={handleLogout} colorScheme='teal' variant='outline'>
                                    Logout
                                </Button>
                            </Stack>
                        ) : (
                            <Stack direction='row' spacing={4} align='center'>
                                <Button onClick={() => navigate('/login')} colorScheme='teal' variant='solid'>
                                    Login
                                </Button>
                                <Button onClick={() => navigate('/register')} colorScheme='teal' variant='outline'>
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
