import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import useAuth from "../../../hooks/useAuth.jsx";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const CheckoutForm = ({session}) => {
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const navigate = useNavigate();
    const {_id, title, image, tutor, email, fee, registrationStart, registrationEnd, classStart, classEnd, duration, desc, info} = session;

    useEffect(() => {
        if (fee > 0) {
            axiosSecure.post('/api/create-payment-intent', { fee: fee })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, fee])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const {error} = await stripe.createPaymentMethod({
            type: 'card', card
        })

        if (error) {
            toast.error(error.message);
        }

        // Confirm payment
        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Unknown',
                    name: user?.displayName || 'Anonymous'
                }
            }
        })

        if (confirmError) {
            toast.error(confirmError.message);
        } else {
            if (paymentIntent.status === 'succeeded') {
                const payment = {
                    email: user.email,
                    fee: fee,
                    transactionId: paymentIntent.id,
                    sessionId: _id,
                    createdAt: new Date().toISOString()
                }

                const res = await axiosSecure.post('/api/payments', payment);
                if (res.data?.insertedId) {
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

                    axiosSecure.post('/api/student/book', sessionInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                toast.success("Enrolled successfully!");
                                navigate('/student/sessions');
                            } else {
                                toast.error(res.data.message);
                            }
                        })
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='p-6 text-center space-y-8'>
                <CardElement className='w-[480px] mx-auto p-6 border'
                             options={{
                                 style: {
                                     base: {
                                         fontSize: '16px',
                                         color: '#424770',
                                         '::placeholder': {
                                             color: '#aab7c4',
                                         },
                                     },
                                     invalid: {
                                         color: '#9e2146',
                                     },
                                 },
                             }}
                />
                <button disabled={!stripe || !clientSecret || fee === 0} type='submit'
                        className='w-56 p-2 bg-[#570DF8] text-white'>
                    Pay
                </button>
            </div>
            <div className='font-semibold text-xl text-center'>Total Price: {fee}</div>
        </form>
    );
};

CheckoutForm.propTypes = {
    clientSecret: PropTypes.string,
    session: PropTypes.object
}

export default CheckoutForm;
