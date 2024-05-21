'use client'
import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm'
// import Sidebar from '../../_components/Sidebar'
import Sidebar from '../../_components/Sidebar'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
function checkout({params}) {
    const options = {
		mode: 'payment',
		currency: 'usd',
		amount: 100
	}
  // console.log(params?.reg_Num_Lab)
  return (
    <>

    <div className="flex h-screen">  
      <Sidebar data={params.reg_Num_Lab} className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
      <div>
        <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
      
    </div>
      </div>
    </div>
    </>
  )
}

export default checkout
