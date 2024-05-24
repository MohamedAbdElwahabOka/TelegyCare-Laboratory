'use client'
import React from 'react'
import Sidebar_for_PatientD from '../../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import FileUploader from '../../_components/FileUploader'

import { useSearchParams } from 'next/navigation';

function Aimodel({params}) {
  const searchParams = useSearchParams();
  const labRegNumber = searchParams.get('labRegNum');
  console.log(params.id_Patient)
  console.log(labRegNumber)
  return (
    <div>
      <div className="flex h-screen">  
      <Sidebar_for_PatientD PatienID={params.id_Patient} labRegNum={labRegNumber} className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
        <FileUploader PatienID={params.id_Patient} labRegNum={labRegNumber} />
      </div>
    </div>
    </div>
  )
}

export default Aimodel
