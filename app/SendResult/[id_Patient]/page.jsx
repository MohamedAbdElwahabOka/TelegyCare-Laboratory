'use client'
import React from 'react'
import { useState } from 'react';
import { useEffect} from 'react'
import SendResults from '../../_components/Send_Results'
import medicalrecordAPI from '../../_Utils/medicalrecordAPI';
import Sidebar_for_PatientD from '../../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2'
function SendResult({params}) {
   
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const labRegNumber = searchParams.get('labRegNum');


  const [medicalRecordsByPatientId,setMedicalRecordsByPatientId] = useState({});
  useEffect(() => {
    getMedicalRecordsByPatientId_();
  }, [params.id_Patient]);

  const getMedicalRecordsByPatientId_ = () => {
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
    medicalrecordAPI.getMedicalRecordsByPatientId(params.id_Patient).then((res) => {
      console.log(params.id_Patient);
      setMedicalRecordsByPatientId(res.data.data);

      setIsLoading(false);
      Swal.close();
    });
  };
  console.log(medicalRecordsByPatientId[0]?.attributes.doctor.data.attributes)


  return (
    <div>
     <div className="flex h-screen">  
      <Sidebar_for_PatientD PatientID={params.id_Patient} labRegNum={labRegNumber} className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
         { isLoading ?(
   
      <div className="flex items-center justify-center min-h-screen">
      <h1>Loading...</h1></div>)        
      :(
      
    
        <SendResults medicalRecords={medicalRecordsByPatientId}/>  )}
      </div>
    </div>
    </div>
  )
}

export default SendResult
