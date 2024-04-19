import React from 'react';
import Link from 'next/link';
function Patient_Details({patient},{doctor}) {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
    <div className="text-xl font-semibold mb-4">{patient?.attributes?.reg_Num}</div>
    <fieldset className="border border-gray-300 p-4 rounded-md">
      <legend className="text-lg font-semibold mb-2">Patient Details</legend>
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Name:</div>
        <span>{patient?.attributes?.Name}</span>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Phone Number:</div>
        <span>{patient?.attributes?.phone}</span>
      </div>
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Email:</div>
        <span>{patient?.attributes?.Email}</span>
      </div>
      
    </fieldset>
    <fieldset className="border border-gray-300 p-4 rounded-md">
      <legend className="text-lg font-semibold mb-2">Doctor Details</legend>
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Name:</div>
        <span>{patient?.attributes?.medical_records?.data?.[0]?.attributes?.Lab_note}</span>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Reg_Num</div>
        <span>{doctor?.attributes?.reg_Num}</span>
      </div>
      <div className="flex items-center mb-4">
        <div className="font-semibold mr-2 w-24">Hospital:</div>
        <span>{doctor?.attributes?.hospital}</span>
      </div>
      
    </fieldset>
    <div className="flex justify-end">
 <Link href="\Orders"

  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Test orders
    </Link>
</div>
  </div>
  )
}

export default Patient_Details
