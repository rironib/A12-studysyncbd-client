import {useQuery} from "@tanstack/react-query";
import Loading from "../../../components/Shared/Loading.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";
import {Helmet} from "react-helmet-async";
import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ApprovedTable from "./ApprovedTable.jsx";
import RejectedTable from "./RejectedTable.jsx";
import PendingTable from "./PendingTable.jsx";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";

const TutorSessions = () => {
    const axiosSecure = useAxiosSecure();
    const {data: sessions = [], isLoading, refetch, error} = useQuery({
        queryKey: ['sessions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/tutor/sessions');
            return res.data;
        }
    });

    const approvedSessions = sessions.filter(session => (session.status === 'approved'));
    const pendingSessions = sessions.filter(session => (session.status === 'pending'));
    const rejectedSessions = sessions.filter(session => (session.status === 'rejected'));

    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return <ErrorAlert error={error}/>;
    }

    return (
        <>
            <Helmet>
                <title>All Sessions | StudySync</title>
            </Helmet>
            <main>
                <Heading className='mb-6 font-lexend text-center'>All Sessions</Heading>
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>Approved</Tab>
                        <Tab>Pending</Tab>
                        <Tab>Rejected</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ApprovedTable sessions={approvedSessions}/>
                        </TabPanel>
                        <TabPanel>
                            <PendingTable sessions={pendingSessions}/>
                        </TabPanel>
                        <TabPanel>
                            <RejectedTable sessions={rejectedSessions} refetch={refetch}/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </main>
        </>
    );
};

export default TutorSessions;
