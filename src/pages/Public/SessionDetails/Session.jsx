import {useLoaderData} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { format } from 'date-fns';
import {Rating} from "@smastrom/react-rating";
import {RiCalendarCheckLine, RiCalendarCloseLine, RiCalendarEventLine, RiCalendarScheduleLine, RiTimerLine} from "react-icons/ri";

const Session = () => {
    const session = useLoaderData();

    const {title, image, tutor, avatar, fee, registrationStart, registrationEnd, classStart, classEnd, duration, rating, desc} = session;

    const regStart = format(registrationStart, 'MMMM dd, yyyy');
    const regEnd = format(registrationEnd, 'MMMM dd, yyyy')
    const classStartFormatted = format(classStart, 'MMMM dd, yyyy')
    const classEndFormatted = format(classEnd, 'MMMM dd, yyyy')

    const handleBookButton = (session) =>{
        console.log(session);
    }

    return (
        <>
            <Helmet>
                <title>{title} | StudySync</title>
            </Helmet>
            <main className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto mt-32 my-20'>
                <div className='grid grid-cols-6 gap-8 mb-8'>
                    <div className='col-span-4 grid gap-6'>
                        <div>
                            <img src={image} alt={title} className='w-full h-96 rounded-lg'/>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <img src={avatar} alt={tutor} className='w-14 h-14 rounded-full'/>
                                <div>
                                    <h4 className='text-slate-700 text-sm'>Tutor</h4>
                                    <h3 className='font-medium text-lg'>{tutor}</h3>
                                </div>
                            </div>
                            <Flex className='items-center gap-2'>
                                <Rating style={{maxWidth: 110}} value={rating} readOnly />
                                <span>({rating})</span>
                            </Flex>
                        </div>
                        <h1 className='font-bold text-2xl'>{title}</h1>
                    </div>

                    {/* Right Side */}
                    <div className='col-span-2 h-max p-6 rounded shadow'>
                        <div className='grid gap-4'>
                            <div className='text-blue-600 font-semibold text-2xl'>Price: {fee}</div>
                            <div className='grid gap-2 mb-2 *:flex *:items-center *:gap-2'>
                                <div><RiCalendarEventLine className='font-medium text-lg text-teal-600'/> Registration start : {regStart}</div>
                                <div><RiCalendarCloseLine className='font-medium text-lg text-teal-600'/> Registration end: {regEnd}</div>
                                <div><RiCalendarScheduleLine className='font-medium text-lg text-teal-600'/> Class start: {classStartFormatted}</div>
                                <div><RiCalendarCheckLine className='font-medium text-lg text-teal-600'/> Class end: {classEndFormatted}</div>
                                <div><RiTimerLine className='font-medium text-lg text-teal-600'/> Session duration: {duration}</div>
                            </div>
                            <Button onClick={() => handleBookButton(session)} colorScheme='teal' size='lg' className='w-full'>Book Now</Button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>Session Info</Tab>
                        <Tab>Reviews</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>{desc}</p>
                        </TabPanel>
                        <TabPanel>

                            {/* Reviews Section */}
                            <div>All Reviews Will Be Display Here</div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </main>
        </>
    );
};

Session.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}

export default Session;
