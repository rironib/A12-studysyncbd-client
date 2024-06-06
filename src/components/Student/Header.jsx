import {Avatar, Button, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack} from "@chakra-ui/react";
import {
    AddIcon,
    AtSignIcon,
    AttachmentIcon, CalendarIcon,
    EditIcon,
    ExternalLinkIcon,
    HamburgerIcon,
    RepeatIcon
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
                                    <MenuItem onClick={() => navigate('/dashboard/home')} icon={<AtSignIcon />}>
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/dashboard/sessions')} icon={<CalendarIcon />}>
                                        Sessions
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/dashboard/create-note')} icon={<AddIcon />}>
                                        Create Note
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/dashboard/manage-note')} icon={<EditIcon />}>
                                        Manage Notes
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/dashboard/study-materials')} icon={<AttachmentIcon />}>
                                        Study Materials
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                        <Link to='/'>
                            <Heading as='h1' size='xl'>StudySync</Heading>
                        </Link>
                    </div>
                    <div className='hidden lg:flex gap-4 font-semibold'>
                        <NavLink to='/dashboard/home'>Dashboard</NavLink>
                        <NavLink to='/dashboard/sessions'>Sessions</NavLink>
                        <NavLink to='/dashboard/create-note'>Create Note</NavLink>
                        <NavLink to='/dashboard/manage-note'>Manage Notes</NavLink>
                        <NavLink to='/dashboard/study-materials'>Study Materials</NavLink>
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
