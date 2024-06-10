import useAuth from "../../../hooks/useAuth.jsx";
import {Avatar, useBreakpointValue} from "@chakra-ui/react";
import {Helmet} from "react-helmet-async";

const AdminHome = () => {
    const {user} = useAuth();
    const avatarSize = useBreakpointValue({ base: 'xl' });

    return (
        <>
            <Helmet>
                <title>Dashboard | StudySync</title>
            </Helmet>
            <main>
                <div className='w-full bg-slate-200 p-12 rounded shadow'>
                    <div className='w-full flex flex-col justify-center items-center gap-8'>
                        <Avatar size={avatarSize} name={user?.displayName} src={user?.photoURL}/>
                        <div className='text-center'>
                            <h2 className='capitalize font-bold text-4xl text-violet-600'>{user?.displayName}</h2>
                            <p className='capitalize'>{'student'}</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AdminHome;
