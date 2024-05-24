'use client'
import { useEffect, useState } from 'react';
import Table from './Table';
import Swal from 'sweetalert2'

import medicalrecordAPI from '../_Utils/medicalrecordAPI'

function Patient_Id({data}) {

  const [isLoading, setIsLoading] = useState(true);


const [patientsByLabId, setPatientsByLabId] = useState([]);

  useEffect(() => {
    getPatientsByLabId_();
  }, [data])

  const getPatientsByLabId_ = () => {
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


      medicalrecordAPI.getMedicalRecordsByLabId(data).then(res => {
      console.log(res.data.data);
      setPatientsByLabId(res.data.data);
      
 
      setIsLoading(false);
      Swal.close();
    })
  }
console.log(data)

  return (

    <div>
    {      isLoading ?(
   
      <div className="flex items-center justify-center min-h-screen">
      <h1>Loading...</h1></div>)        
      :(
        <Table labRegNum={data} data={patientsByLabId} />
      )}


   


     
    </div>
  )
}

export default Patient_Id
