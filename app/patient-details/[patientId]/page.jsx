'use client'
import React, { useEffect, useState} from "react";
import PatientAPI from '../../_Utils/PatientAPI'
import medicalrecordAPI from '../../_Utils/medicalrecordAPI'
import Patient_Details from './_components/Patient_Details'
import Sidebar_for_PatientD from './_components/Sidebar_for_PatientD'
import Swal from 'sweetalert2'

import { useSearchParams } from 'next/navigation';

function patient_details({params}) {
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const labRegNumber = searchParams.get('labRegNum');
  
  const [patientDetails, setPatientDetails] = useState({});
  useEffect(() => {
    getPatientById_();
  }, [params?.productId]);


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

    PatientAPI.getPatientById(params?.patientId).then((res) => {
      console.log("patient item ", res.data.data);
      setPatientDetails(res.data.data);

      setIsLoading(false);
      Swal.close();
   
    });
  };
  const [medicalRecordsByPatientId,setMedicalRecordsByPatientId] = useState({});
  useEffect(() => {
    getMedicalRecordsByPatientId_();
  }, [params?.productId]);

  const getMedicalRecordsByPatientId_ = () => {
    medicalrecordAPI.getMedicalRecordsByPatientId(params?.patientId).then((res) => {
      console.log(params?.patientId);
      console.log(labRegNumber);
      setMedicalRecordsByPatientId(res.data.data);

    });
  };


  return (
    <div className="flex h-screen">  
      <Sidebar_for_PatientD PatienID={params.patientId} labRegNum={labRegNumber} className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
    
      {      isLoading ?(
   
   <div className="flex items-center justify-center min-h-screen">
   <h1>Loading...</h1></div>)        
   :(
    <Patient_Details patient={patientDetails} medicalrec={medicalRecordsByPatientId} labRegNum={labRegNumber} PatienID={params.patientId} />
   )}


     
      </div>
    </div>
      
  
  )
}

export default patient_details
