'use client'
import React from 'react'
import Sidebar_for_PatientD from '../../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import AorticSegmentation from '../_components/AorticSegmentation'

import { useSearchParams } from 'next/navigation';

 
function Ai_result({params}) {
  const searchParams = useSearchParams();
  const labRegNumber = searchParams.get('labRegNum');
  return (
    <div>
     <div className="flex h-screen">  
      <Sidebar_for_PatientD PatienID={params.LabRegNum}  labRegNum={labRegNumber}  className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
        <AorticSegmentation/>

      </div>
    </div>
    </div>
  )
}

export default Ai_result
