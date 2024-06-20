'use client'
import React from 'react'
import { useState } from 'react';
import { useEffect} from 'react'
import Sidebar_for_PatientD from '../../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import FileUploader from '../_components/FileUploader'
import { useSearchParams } from 'next/navigation';
import PatientAPI from '../../_Utils/PatientAPI';
import Swal from 'sweetalert2'

function Aimodel({params}) {
  const [isLoading, setIsLoading] = useState(true);
/*******************Start of get Patient Details*********************** */

const [patientDetails, setPatientDetails] = useState({});
useEffect(() => {
  getPatientById_();
}, [params.id_Patient]);
const getPatientById_ = () => {
Swal.fire({
      title: 'Loading...',
      html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      customClass: {
        popup: 'my-custom-popup'
      }
   
    });
  PatientAPI.getPatientById(params.id_Patient).then((res) => {
    console.log("patient item ", res.data.data);
    setPatientDetails(res.data.data);

    setIsLoading(false);
      Swal.close();
  });
};
console.log(patientDetails)
/********************End of get Patient Details************************ */

  const searchParams = useSearchParams();
  const labRegNumber = searchParams.get('labRegNum');
  console.log(params.id_Patient)
  console.log(labRegNumber)
  return (
    <div>
      <div className="flex h-screen">  
      <Sidebar_for_PatientD PatientID={params.id_Patient} labRegNum={labRegNumber} className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
      { isLoading ?(
   
   <div className="flex items-center justify-center min-h-screen">
   <h1>Loading...</h1></div>)        
   :(
   
 
    
        <FileUploader PatientID={params.id_Patient} labRegNum={labRegNumber} patientDetails={patientDetails}/> )}
      </div>
    </div>
    </div>
  )
}

export default Aimodel
