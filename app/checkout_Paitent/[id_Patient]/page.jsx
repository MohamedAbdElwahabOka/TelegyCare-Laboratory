'use client'
import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Sidebar_for_PatientD from '../../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import CheckoutForm from '../../checkout/CheckoutForm'
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
export default function page({params}) {
  const searchParams = useSearchParams();
  const labRegNumber = searchParams.get('labRegNum');

    const options = {
		mode: 'payment',
		currency: 'usd',
		amount: 100
	}
  console.log(params.id_Patient)
  return (
    <>
  
    <div className="flex h-screen">  
    <Sidebar_for_PatientD PatientID={params.id_Patient} labRegNum={labRegNumber} className="w-64 bg-gray-800 text-white px-4 py-8" />
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
