'use client'
import React, { useEffect, useState} from "react";
import PatientAPI from '../../_Utils/PatientAPI'
import medicalrecordAPI from '../../_Utils/medicalrecordAPI'
import Patient_Details from './_components/Patient_Details'
import Sidebar_for_PatientD from './_components/Sidebar_for_PatientD'
function patient_details({params}) {
  const [patientDetails, setPatientDetails] = useState({});
  useEffect(() => {
    getPatientById_();
  }, [params?.productId]);

  const getPatientById_ = () => {
    PatientAPI.getPatientById(params?.patientId).then((res) => {
      console.log("patient item ", res.data.data);
      setPatientDetails(res.data.data);
      // getPatientByRegistrationNumber_(res.data.data);
    });
  };
  const [medicalRecordsByPatientId,setMedicalRecordsByPatientId] = useState({});
  useEffect(() => {
    getMedicalRecordsByPatientId_();
  }, [params?.productId]);

  const getMedicalRecordsByPatientId_ = () => {
    medicalrecordAPI.getMedicalRecordsByPatientId(params?.patientId).then((res) => {
      console.log(params?.patientId);
      console.log(res.data.data);
      setMedicalRecordsByPatientId(res.data.data);

    });
  };



  // getMedicalRecordsByPatientId

  // const getPatientByRegistrationNumber_ = (product) => {
  //   ProductApis.getPatientByRegistrationNumber(product?.attributes.category).then(
  //     (res) => {
  //       console.log(res?.data?.data);
        // setProductList(res?.data?.data);
  //     }
  //   );
  // };
  return (
    <div className="flex h-screen">  
      <Sidebar_for_PatientD PatienID={params.patientId} className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
    
      <Patient_Details patient={patientDetails} medicalrec={medicalRecordsByPatientId}/>
      </div>
    </div>
      
  
  )
}

export default patient_details
