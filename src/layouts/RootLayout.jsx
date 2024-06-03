import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <>
            <ToastContainer
                autoClose={2000}
                theme="colored"
            />
            <Outlet/>
        </>
    );
};

export default Root;