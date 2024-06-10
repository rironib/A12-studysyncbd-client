import PropTypes from "prop-types";
import {Rating} from "@smastrom/react-rating";
import {Alert, AlertIcon, Avatar} from "@chakra-ui/react";
import moment from 'moment';
import Loading from "../../../components/Shared/Loading.jsx";
import ErrorAlert from "../../../components/Shared/ErrorAlert.jsx";

const Reviews = ({reviews, isLoading, error}) => {
    if (isLoading) {
        return <Loading/>;
    } else if (error) {
        return <ErrorAlert error={error}/>;
    }

    if (!reviews || reviews.length === 0) {
        return (
            <Alert status='error'>
                <AlertIcon /> No review found.
            </Alert>
        )
    }

    return (
        <div className='space-y-4'>
            {
                reviews.map((review, index) => (
                    <div key={index} className='flex flex-col lg:flex-row gap-6 p-6 border rounded-lg'>
                        <div className='w-1/2 flex items-center gap-4'>
                            <Avatar
                                size='lg'
                                name={review.name}
                            />
                            <div className='grid gap-1'>
                                <h2 className="text-xl font-semibold text-gray-800">{review.name}</h2>
                                <p className="text-gray-600 text-sm">{review.email}</p>
                                <p className="text-gray-600 text-sm">{moment(review.createdAt).format('MMMM D, YYYY')}</p>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <Rating
                                style={{maxWidth: 120}}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.comment}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.func
}

export default Reviews;
