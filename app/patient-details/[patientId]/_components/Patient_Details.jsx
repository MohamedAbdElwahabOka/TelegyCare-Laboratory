import React from 'react';
import Link from 'next/link';
function Patient_Details({patient,medicalrec,labRegNum,PatienID}) {
  console.log(medicalrec)
  console.log(patient);


  
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
    <div className="text-xl font-semibold mb-4">#{patient?.attributes?.reg_Num}
    
    </div>
    <div className="grid grid-cols-2 gap-4">
  <div className="w-full">
    <fieldset className="border border-gray-300 p-4 rounded-md">
      <legend className="text-lg font-semibold mb-2">Patient Details</legend>
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Name:</div>
        <span>{patient?.attributes?.Name}</span>
      </div>
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Email:</div>
        <span>{patient?.attributes?.Email}</span>
      </div>
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Phone Number:</div>
        <span className="break-all">{patient?.attributes?.phone}</span>
      </div>
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">National ID:</div>
        <span>{patient?.attributes?.NationalId}</span>
        <br/><br/>
      </div>
    </fieldset>
  </div>
  <div className="w-full">
    <fieldset className="border border-gray-300 p-4 rounded-md">
        <legend className="text-lg font-semibold mb-2">Medical Records</legend>

        <div className="flex items-center mb-4">
            <div className="font-semibold mr-2 w-24">Blood Type:</div>
            <span>{patient?.attributes?.Blood_Type}</span>
        </div>

        <div className="flex items-center mb-4">
            <div className="font-semibold mr-2 w-24">Blood Pressure:</div>
            <span className="mr-20">{patient?.attributes?.medical_records?.data?.[0]?.attributes?.Blood_Pressure}</span> {/* Added mr-4 for space */}
            <div className="font-semibold mr-2 w-24">Pulse:</div>
            <span>{patient?.attributes?.medical_records?.data?.[0]?.attributes?.Pulse}</span>
        </div>

        <div className="flex items-center mb-4">
            <div className="font-semibold mr-2 w-24">Height:</div>
            <span className="mr-20">{patient?.attributes?.medical_records?.data?.[0]?.attributes?.Height}</span> {/* Added mr-4 for space */}
            <div className="font-semibold mr-2 w-24">Weight:</div>
            <span>{patient?.attributes?.medical_records?.data?.[0]?.attributes?.Weight}</span>
        </div>
        <div className="flex items-center mb-4">
            <div className="font-semibold mr-2 w-24">Body Mass Index:</div>
            <span className="break-all">{patient?.attributes?.medical_records?.data?.[0]?.attributes?.Body_Mass_Index}</span>
        </div>
    </fieldset>
</div></div>

<br/>
<div className="grid grid-cols-2 gap-4">
    <fieldset className="border border-gray-300 p-4 rounded-md">
      <legend className="text-lg font-semibold mb-2">Doctor Details</legend>
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Name:</div>
        <span>{medicalrec?.[0]?.attributes?.doctor?.data?.attributes?.Name}</span>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Reg_Num:</div>
        <span>{medicalrec?.[0]?.attributes?.doctor?.data?.attributes?.reg_Num}</span>
   
      </div>
    
      
    </fieldset>
    
    
    <fieldset className="border border-gray-300 p-4 rounded-md">
      <legend className="text-lg font-semibold mb-2">Tests</legend>
      <div className="flex items-center mb-4">
       
      <span>
  {patient?.attributes?.medical_records?.data?.[0]?.attributes?.Test_Orders!== null && patient?.attributes?.medical_records?.data?.[0]?.attributes?.Test_Orders!== undefined
   ? patient?.attributes?.medical_records?.data?.[0]?.attributes?.Test_Orders.split(/\s*\d+\.\s+/)
     .filter(Boolean)
     .map((test, index) => (
        <div key={index} className="mb-2">
          {index + 1}. {test}
        </div>
      ))
    : 'No Test Orders'}
</span>
          
      </div>
      
      
    
      
    </fieldset>


    </div>
    
    <div className="flex justify-end">




 {/* <Link href={`/SendResult/${PatienID}?labRegNum=${labRegNum}`}

  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Send Result
    </Link> */}
</div>
  </div>
  )
}

export default Patient_Details