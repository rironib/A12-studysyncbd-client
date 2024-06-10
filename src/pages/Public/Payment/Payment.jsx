import {Helmet} from "react-helmet-async";
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm.jsx";
import {useLoaderData} from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    const session = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Payment | Bistro Boss</title>
            </Helmet>
            <main className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto mt-32 my-20'>
                <div className='mb-6 font-bold text-xl lg:text-3xl text-center text-violet-600'>
                    Payment
                </div>
                <div className='bg-white p-6'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm session={session}/>
                    </Elements>
                </div>
            </main>
        </>
    );
};

export default Payment;
