import {Helmet} from "react-helmet-async";
import useAuth from "../../../hooks/useAuth.jsx";

const StudentHome = () => {
    const {user} = useAuth();

    return (
        <>
            <Helmet>
                <title>Dashboard | StudySync</title>
            </Helmet>
            <div className='mt-8'>
                <div className='font-bold text-4xl text-center'>Welcome, {user?.displayName}</div>
            </div>
        </>
    );
};

export default StudentHome;
