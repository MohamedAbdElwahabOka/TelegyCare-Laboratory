import React from 'react'
import Patient_Id from '../_components/Patient_Id'
import Sidebar from '../_components/Sidebar'

function PatientId() {
  return (
    <div>
    <div className="flex h-screen">  
      <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
        <Patient_Id/>
      </div>
    </div>
      
    </div>
  )
}

export default PatientId
