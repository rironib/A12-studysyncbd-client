import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <div className='w-screen h-screen bg-slate-100 p-12 flex justify-evenly items-center flex-col gap-8'>
                <div className='w-10/12 h-5/6 bg-white flex flex-col gap-4 justify-center items-center p-12 text-center shadow rounded-xl'>
                    <h1 className='mb-6 font-bold text-6xl text-violet-600'>404</h1>
                    <h3 className='font-semibold text-4xl'>
                        This page does not exist
                    </h3>
                    <h5 className='mb-8 font-medium text-lg text-slate-600'>
                        The page you are looking for could not be found.
                    </h5>
                    <Link to='/' className='w-max px-8 py-3 bg-slate-900 font-semibold text-white rounded'>Home</Link>
                </div>
            </div>
        </>
    );
};

export default Error;
