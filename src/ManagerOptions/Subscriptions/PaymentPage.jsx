import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PaymentPage = () => {

    const stripe = useStripe();
    const [error, setError] = useState('')
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            toast('Card data is not complete')
            console.log('payment error', error)
            setError(error.message)
        }
        else (console.log('payment method', paymentMethod))
        setError('')
    }
    return (
        <div className="p-10 border-4">
            <form className="" onSubmit={handleSubmit}>
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
                <div className="text-center">
                    <button className="btn btn-wide bg-cyan-400 my-10">Pay</button>
                </div>
                <p className="text-red-600 my-5 text-xl">{error}</p>

            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default PaymentPage;