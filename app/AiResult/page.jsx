import React from 'react'
import Sidebar from '../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import AorticSegmentation from './_components/AorticSegmentation'


function Ai_result() {
  return (
    <div>
     <div className="flex h-screen">  
      <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
        <AorticSegmentation/>
        {/* <MakePDF/> */}
         {/* <Make/> */}
       {/* <Makedpfwithjsreport/>*/}
       {/* <PrintPDF/> */}

      </div>
    </div>
    </div>
  )
}

export default Ai_result
