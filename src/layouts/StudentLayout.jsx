import {Outlet, useNavigate} from "react-router-dom";
import useAdmin from "../hooks/useAdmin.jsx";
import Header from "../components/Student/Header.jsx";
const StudentLayout = () => {
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();

    if (isAdmin) {
        navigate('/admin');
    }

    return (
        <>
            <Header/>
            <main className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                <Outlet/>
            </main>
        </>
    );
};

export default StudentLayout;
