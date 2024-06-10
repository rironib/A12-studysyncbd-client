import PropTypes from "prop-types";
import {Alert, AlertIcon, Button, Textarea} from "@chakra-ui/react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { useForm, Controller } from "react-hook-form";
import useAuth from "../../../hooks/useAuth.jsx";
import {toast} from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import useStudent from "../../../hooks/useStudent.jsx";

const AddReview = ({ session, refetch }) => {
    const {user} = useAuth();
    const [isStudent] = useStudent();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit: onSubmitForm, control, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const reviewData = {
                sessionId: session._id,
                name: user?.displayName || "Unknown",
                email: user?.email || null,
                rating: data.rating,
                comment: data.comment,
                createdAt: new Date().toISOString()
            }
            const res = await axiosSecure.post('/api/review/add', reviewData);
            if (res.data.insertedId) {
                reset();
                refetch();
                toast.success("Review created successfully!");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div className='col-span-2 h-max p-6 rounded shadow'>
            <div className='grid gap-4'>
                <div className='text-blue-600 font-semibold text-2xl'>Create Review</div>
                <form onSubmit={onSubmitForm(onSubmit)} className='grid gap-4'>
                    <Controller
                            control={control}
                            name="rating"
                            rules={{
                                validate: (rating) => rating > 0,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Rating
                                    style={{ maxWidth: 200 }}
                                    value={value}
                                    isRequired
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                            )}
                        />

                    {errors.rating && (
                        <Alert status='error'>
                            <AlertIcon />
                            Rating is required.
                        </Alert>
                    )}

                    <Textarea {...register('comment', { required: true })} placeholder='Write your review' />

                    {errors.comment && (
                        <Alert status='error'>
                            <AlertIcon />
                            Review is required.
                        </Alert>
                    )}
                </form>
                {
                    isStudent ? (
                        <Button onClick={onSubmitForm(onSubmit)} colorScheme='teal' size='lg' className='w-full'>
                            Submit
                        </Button>
                    ) : (
                        <Button onClick={onSubmitForm(onSubmit)} colorScheme='teal' size='lg' className='w-full' isDisabled>
                            Submit
                        </Button>
                    )
                }
            </div>
        </div>
    );
};

AddReview.propTypes = {
    session: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
}

export default AddReview;
