import React from 'react'
import Sidebar from '../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import FileUploader from '../_components/FileUploader'
function Aimodel() {
  return (
    <div>
      <div className="flex h-screen">  
      <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
        <FileUploader/>
      </div>
    </div>
    </div>
  )
}

export default Aimodel
