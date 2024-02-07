import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import useCart from '../../../../Hooks/useCart';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()

    // for store err and cardErr & print for Client. 
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [Transaction_ID, setTransaction_ID] = useState('')

    // requre user for user info and axios for fetch || request. 
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const [cart, refetch] = useCart();

    const totalPrice = cart?.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    // after fetch this api we get clientSecret from server after varified client acc info.
                    console.log("clientSecret : ", res.data.clientSecret.client_secret);
                    // const clientSecret = res.data.clientSecret
                    setClientSecret(res.data.clientSecret.client_secret);
                })
        }
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        // check is stripe & element avalilable or not. if not then return from heare, else cotinue: 
        if (!stripe || !elements) {
            return;
        }

        // get cardElement data from client. if client given data then ok or return: 
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        // console.log(card); //^ Console here for getting data ok or not. 

        // Use your card Element with other Stripe.js APIs || Make a Payment Method Only
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card', card
        });

        if (error) {
            console.log("error", error);
            setError(error.message)
        } else {
            // if not finding error then we reasign error msg
            setError('')
            console.log("Payment Method", paymentMethod);
        }
        //  এই পর্যন্ত ঠিক আছে। এখানে আমরা সঠিক ভাবে রেস্পন্স পাচ্ছি, এখান থেকে পাওয়া রেজাল্ট বা এরোর কে আমরা স্টেট এ রেখে দেখাতে পারি। 

        // * Confirm payment fuction
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Anonymous_user',
                    email: user?.email || "Anonymous",
                },
            },
        })

        if (confirmError) {
            console.log("Confirm Error", confirmError);
            setError()
        }
        else {
            console.log("PaymentIntant", paymentIntent);
            setError()
            if (paymentIntent.status == "succeeded") {
                Swal.fire({
                    icon: "success",
                    title: "Payment Success",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashbord/paymenthistry')
                setTransaction_ID(paymentIntent.id)
                console.log("Transaction_ID"), paymentIntent.id;

                // we make a payment object for send to server . we need email, price, id, menu_id, date.
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    Transaction_ID: paymentIntent.id,
                    date: new Date(), //utc date convert for worldwide. use moment.js 
                    _cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuItemId),
                    status: "pending"
                }

                //* post by using axios secure 
                const res = await axiosSecure.post('/payments', payment);
                console.log("payyyyyyyyyment saved", res.data);
                refetch()
            }
        }
    }


    return (
        <div>
            <form className='w-2/3  bg-slate-100 rounded-2xl lg:mx-14 lg:p-6 md:mx-10 md:p-5' onSubmit={handleSubmit}>
                {
                    clientSecret && (
                        <CardElement
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
                    )
                }
                <button className='btn btn-sm w-full mt-6' type="submit">
                    Pay
                </button>
            </form>
            {
                error && <p className='text-red-600  lg:px-20 font-semibold'>{error}</p>
            }
            {
                Transaction_ID && <p className='text-success lg:px-20 font-semibold'>Your Transaction is Success.</p>
            }
        </div>
    );
};

export default CheckOut;