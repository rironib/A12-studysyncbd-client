import {Button, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack} from "@chakra-ui/react";
import {AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon} from "@chakra-ui/icons";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className='w-full bg-slate-100 bg-opacity-50 text-slate-900 fixed z-10 shadow'>
            <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto py-4'>
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
                    <Stack direction='row' spacing={4} align='center'>
                        <Button onClick={() => navigate('/login')} colorScheme='teal' variant='solid'>
                            Login
                        </Button>
                        <Button onClick={() => navigate('/register')} colorScheme='teal' variant='outline'>
                            Sign up
                        </Button>
                    </Stack>
                </div>
            </div>
        </header>
    );
};

export default Header;
