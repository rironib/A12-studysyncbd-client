import useAuth from "../../hooks/useAuth.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {Avatar, Button, useBreakpointValue} from "@chakra-ui/react";

const UserNav = () => {
    const breakpoint = useBreakpointValue({ base: 'sm', md: 'md' });
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
        <div className='flex items-center gap-2 sm:gap-4'>
            <Avatar size={breakpoint} name={user?.displayName} src={user?.photoURL} />
            <Button size={breakpoint} onClick={handleLogout} colorScheme='teal'>
                Logout
            </Button>
        </div>
    );
};

export default UserNav;
