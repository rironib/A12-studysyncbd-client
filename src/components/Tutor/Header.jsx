import {Heading, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {
    AddIcon,
    AtSignIcon,
    AttachmentIcon, CalendarIcon, ChatIcon,
    EditIcon,
    HamburgerIcon,
} from "@chakra-ui/icons";
import {Link, NavLink, useNavigate} from "react-router-dom";
import UserNav from "../Shared/UserNav.jsx";

const Header = () => {
    const navigate = useNavigate();

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
                                    <MenuItem onClick={() => navigate('/tutor/dashboard')} icon={<AtSignIcon />}>
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/tutor/create-sessions')} icon={<CalendarIcon />}>
                                        Create Sessions
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/tutor/sessions')} icon={<AddIcon />}>
                                        Sessions
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/tutor/materials')} icon={<AttachmentIcon />}>
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
                        <NavLink to='/tutor/dashboard'>Dashboard</NavLink>
                        <NavLink to='/tutor/create-sessions'>Create Sessions</NavLink>
                        <NavLink to='/tutor/sessions'>Sessions</NavLink>
                        <NavLink to='/tutor/materials'>Materials</NavLink>
                    </div>
                    <UserNav/>
                </div>
            </div>
        </header>
    );
};

export default Header;
