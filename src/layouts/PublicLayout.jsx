import {Outlet} from "react-router-dom";
import Header from "../components/Public/Header.jsx";
import Footer from "../components/Public/Footer.jsx";

const PublicLayout = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-between'>
                <Header/>

                <main className='flex-grow'>
                    <Outlet/>
                </main>

                <Footer/>
            </div>
        </>
    );
};

export default PublicLayout;