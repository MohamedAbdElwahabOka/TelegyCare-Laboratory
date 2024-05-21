import React from 'react'
import Sidebar_for_PatientD from '../../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import AorticSegmentation from '../_components/AorticSegmentation'


function Ai_result({params}) {
  return (
    <div>
     <div className="flex h-screen">  
      <Sidebar_for_PatientD data={params.LabRegNum} className="w-64 bg-gray-800 text-white px-4 py-8" />
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
