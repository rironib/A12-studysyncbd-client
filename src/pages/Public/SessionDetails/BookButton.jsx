import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import useStudent from "../../../hooks/useStudent.jsx";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import useAuth from "../../../hooks/useAuth.jsx";
import {toast} from "react-toastify";
import useBookedSession from "../../../hooks/useBookedSession.jsx";

// eslint-disable-next-line react/prop-types
const BookButton = ({session}) => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [isStudent] = useStudent();
    const navigate = useNavigate();

    const [bookedSessions] = useBookedSession();

    // eslint-disable-next-line react/prop-types
    const {_id, title, image, tutor, email, fee, registrationStart, registrationEnd, classStart, classEnd, duration, desc, info} = session;

    const isBooked = bookedSessions.find(bookedSession => bookedSession?.sessionId === session?._id);

    // Function to format the date
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const currentDate = new Date();
    const today = formatDate(currentDate);

    const handleBookButton = () => {
        const sessionInfo = {
            sessionId: _id,
            title: title,
            image: image,
            tutor: tutor,
            tutorEmail: email,
            userEmail: user?.email,
            desc: desc,
            registrationStart: registrationStart,
            registrationEnd: registrationEnd,
            classStart: classStart,
            classEnd: classEnd,
            duration: duration,
            fee: fee,
            info: info,
            createdAt: new Date().toISOString()
        }

        if (fee <= 0) {
            axiosSecure.post('/api/student/book', sessionInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success("Booked successfully!");
                        navigate('/student/sessions');
                    } else {
                        toast.error(res.data.message);
                    }
                })
        } else {
            navigate(`/payment/${_id}`)
        }
    }

    if (isBooked) {
        return <Button colorScheme='teal' size='lg' className='w-full' isDisabled>Already Booked</Button>;
    } else if (registrationStart > today) {
        return <Button colorScheme='teal' size='lg' className='w-full' isDisabled>Not yeat started</Button>
    } else if (today > registrationEnd || !isStudent) {
        return <Button colorScheme='teal' size='lg' className='w-full' isDisabled>Closed</Button>
    } else {
        return <Button onClick={handleBookButton} colorScheme='teal' size='lg' className='w-full' isDisabled={!isStudent}>Book Now</Button>
    }
};

export default BookButton;
