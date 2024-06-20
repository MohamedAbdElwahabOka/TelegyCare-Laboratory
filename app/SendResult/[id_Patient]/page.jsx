'use client'
import React from 'react'
import SendResults from '../../_components/Send_Results'
import Sidebar_for_PatientD from '../../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import { useSearchParams } from 'next/navigation';

function SendResult({params}) {
  const searchParams = useSearchParams();
  const labRegNumber = searchParams.get('labRegNum');

  return (
    <div>
     <div className="flex h-screen">  
      <Sidebar_for_PatientD PatientID={params.id_Patient} labRegNum={labRegNumber} className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
        <SendResults />
      </div>
    </div>
    </div>
  )
}

export default SendResult
