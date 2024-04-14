import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import {useState } from 'react';
const CheckoutForm = () => {
    const [loading, setLoading] = useState(false);
    const [errormessage, setErrorMessage] = useState()
    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const handleError = (error) => {
        setLoading(false)
        setErrorMessage(error.message)
    }
    // Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}
    const res = await fetch('', {
        method: 'POST',
        body: JSON.stringify({
            amount: 10
        })
    })
    const clientSecret = await res.json()
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='mx-32 md:mx-[300px] mt-12'><PaymentElement />
				<button className='w-full p-2 mt-4 text-[#FFF] rounded-md bg-[#0070CD]'>Submit</button>
			</div>
    </form>
  );
};

export default CheckoutForm;