import {useLoaderData} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {Alert, AlertIcon, Avatar, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { format } from 'date-fns';
import {RiCalendarCheckLine, RiCalendarCloseLine, RiCalendarEventLine, RiCalendarScheduleLine, RiTimerLine} from "react-icons/ri";
import notFound from '/not-found.jpg';
import BookButton from "./BookButton.jsx";
import Reviews from "./Reviews.jsx";
import AddReview from "./AddReview.jsx";
import {useQuery} from "@tanstack/react-query";
import {axiosPublic} from "../../../hooks/useAxiosPublic.jsx";
import Loading from "../../../components/Shared/Loading.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";

const SessionDetails = () => {
    const session = useLoaderData();
    const {_id, title, image, tutor, fee, registrationStart, registrationEnd, classStart, classEnd, duration, desc, info} = session;

    const {data: reviews = [], isLoading, refetch, error} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/reviews/${_id}`);
            return res.data;
        }
    });

    const regStart = format(registrationStart, 'MMMM dd, yyyy');
    const regEnd = format(registrationEnd, 'MMMM dd, yyyy')
    const classStartFormatted = format(classStart, 'MMMM dd, yyyy')
    const classEndFormatted = format(classEnd, 'MMMM dd, yyyy')

    return (
        <>
            <Helmet>
                <title>{title} | StudySync</title>
            </Helmet>
            <main className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto mt-32 my-20'>
                <div className='grid lg:grid-cols-3 gap-8 mb-8'>
                    <div className='h-max lg:col-span-2 space-y-8'>
                        <div className='grid gap-6'>
                            <div>
                                <img src={image || notFound} alt={title} className='w-full h-96 rounded-lg'/>
                            </div>
                            <Flex className='items-center gap-2'>
                                <Avatar size='sm' name={tutor}/>
                                <Text>{tutor}</Text>
                            </Flex>
                            <h1 className='font-bold text-2xl'>{title}</h1>
                        </div>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab>Session Info</Tab>
                                <Tab>Reviews</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <div className='mb-4 font-semibold text-lg'>Description</div>
                                    <p className='mb-8'>{desc}</p>
                                    <div className='mb-4 font-semibold text-lg'>Additional Info</div>
                                    <p className='mb-8'>
                                        {
                                            info || (
                                        <Alert status='error'>
                                            <AlertIcon /> No additional info found.
                                        </Alert>)
                                        }
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <Reviews reviews={reviews} isLoading={isLoading} error={error} />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>

                    {/* Right Side */}
                    <div className='space-y-8 h-max'>
                        <div className='grid gap-4 p-6 rounded shadow'>
                            <div className='text-blue-600 font-semibold text-2xl'>Price: ${fee}</div>
                            <div className='grid gap-2 mb-2 *:flex *:items-center *:gap-2'>
                                <div><RiCalendarEventLine className='font-medium text-lg text-teal-600'/> Registration start : {regStart}</div>
                                <div><RiCalendarCloseLine className='font-medium text-lg text-teal-600'/> Registration end: {regEnd}</div>
                                <div><RiCalendarScheduleLine className='font-medium text-lg text-teal-600'/> Class start: {classStartFormatted}</div>
                                <div><RiCalendarCheckLine className='font-medium text-lg text-teal-600'/> Class end: {classEndFormatted}</div>
                                <div><RiTimerLine className='font-medium text-lg text-teal-600'/> Session duration: {duration}</div>
                            </div>
                            <BookButton session={session} />
                        </div>
                        <AddReview session={session} refetch={refetch} />
                    </div>
                </div>
            </main>
        </>
    );
};

SessionDetails.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}

export default SessionDetails;
