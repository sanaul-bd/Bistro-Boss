

import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../../Components/Section_Title/SectionTitle';
import CheckOut from './CheckOut';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK)

const Payment = () => {

    return (
        <div className='w-full'>
            <SectionTitle heading='Payment Here' subHeading='Please Process '></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;