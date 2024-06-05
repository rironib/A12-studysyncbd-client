import {Helmet} from "react-helmet-async";
import Banner from "./Banner.jsx";
import TutorSection from "./TutorSection.jsx";
import SessionSection from "./SessionSection.jsx";
import BrandSection from "./BrandSection.jsx";
import StudentReview from "./StudentReview.jsx";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | StudySync</title>
            </Helmet>
            <>
                <Banner/>
                <main className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                    <SessionSection/>
                    <TutorSection/>
                    <BrandSection/>
                    <StudentReview/>
                </main>
            </>
        </>
    );
};

export default Home;
