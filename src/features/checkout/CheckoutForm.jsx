import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
// import "../../App.css"

function CheckoutForm() {

  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();

  const CARD_STYLES = {
    style: {
      base: {
        color: '#000',
        fontSize: '16px',
        fontFamily: 'ui-sans-serif, system-ui',
        '::placeholder': {
          color: '#a0aec0', 
        },
      },
      invalid: {
        color: '#e53e3e',
        iconColor: '#e53e3e',
      }
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      navigate("/search")
      
    } else {
      console.log('PaymentMethod:', paymentMethod);
      navigate("/search")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg">
    <div className="mb-4">
      {/* Apply the custom styles to CardElement via the options prop */}
      <CardElement options={CARD_STYLES} className="p-3 bg-gray-100 rounded-md border border-gray-300"/>
    </div>
    <button 
      type="submit" 
      disabled={!stripe} 
      className={`bg-blue-500 hover:bg-blue-700 text-white w-10p font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      ${!stripe ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      Pay
    </button>
  </form>
  
  );
}

export default CheckoutForm;

