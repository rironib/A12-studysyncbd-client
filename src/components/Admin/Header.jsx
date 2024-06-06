import {Heading, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {
    AddIcon,
    AtSignIcon,
    AttachmentIcon, CalendarIcon, ChatIcon,
    EditIcon,
    HamburgerIcon,
} from "@chakra-ui/icons";
import {Link, NavLink, useNavigate} from "react-router-dom";
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
        <header className='w-full bg-slate-100 text-slate-900 sticky top-0 z-10 shadow'>
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
                                    <MenuItem onClick={() => navigate('/admin/dashboard')} icon={<AtSignIcon />}>
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/admin/users')} icon={<CalendarIcon />}>
                                        Users
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/admin/sessions')} icon={<AddIcon />}>
                                        Sessions
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/admin/materials')} icon={<AttachmentIcon />}>
                                        Materials
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                        <Link to='/'>
                            <Heading as='h1' size='xl'>StudySync</Heading>
                        </Link>
                    </div>
                    <div className='hidden lg:flex gap-4 font-semibold'>
                        <NavLink to='/admin/dashboard'>Dashboard</NavLink>
                        <NavLink to='/admin/users'>Users</NavLink>
                        <NavLink to='/admin/sessions'>Sessions</NavLink>
                        <NavLink to='/admin/materials'>Materials</NavLink>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={user?.photoURL} alt={user?.displayName} className='w-10 lg:w-12 h-10 lg:h-12 rounded-full' />
                        <button onClick={handleLogout} className='hidden lg:block bg-teal-700 text-white px-4 py-2 font-medium rounded'>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
