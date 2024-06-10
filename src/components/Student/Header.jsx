import {Heading, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {
    AddIcon,
    AtSignIcon,
    AttachmentIcon, CalendarIcon,
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
                                    <MenuItem onClick={() => navigate('/student/dashboard')} icon={<AtSignIcon />}>
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/student/sessions')} icon={<CalendarIcon />}>
                                        Sessions
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/student/create-note')} icon={<AddIcon />}>
                                        Create Note
                                    </MenuItem>
                                    <MenuItem onClick={() => navigate('/student/notes')} icon={<EditIcon />}>
                                        Manage Notes
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                        <Link to='/'>
                            <Heading as='h1' size='xl'>StudySync</Heading>
                        </Link>
                    </div>
                    <div className='hidden lg:flex gap-4 font-semibold'>
                        <NavLink to='/student/dashboard'>Dashboard</NavLink>
                        <NavLink to='/student/sessions'>Sessions</NavLink>
                        <NavLink to='/student/create-note'>Create Note</NavLink>
                        <NavLink to='/student/notes'>Manage Notes</NavLink>
                    </div>
                    <UserNav/>
                </div>
            </div>
        </header>
    );
};

export default Header;
