import React from 'react';
import Link from 'next/link';
function Patient_Details({patient,medicalrec}) {
  console.log(medicalrec)
  console.log(patient);
  const cloudinaryPdfUrl = "https://res.cloudinary.com/dlw9u7jf0/image/upload/v1718825281/medical_report_8_c51dbddd08.pdf"; 
  const cloudinaryPngUrl = "https://res.cloudinary.com/dlw9u7jf0/image/upload/v1719054709/vscode_icons_file_type_pdf2_b29bc1d7a5.png";

  
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
            {/* <div className="font-semibold mr-2 w-24">Pulse:</div>
            <span>{patient?.attributes?.medical_records?.data?.[0]?.attributes?.Pulse}</span> */}
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
    
    <fieldset  className="border border-gray-300 p-4 rounded-md">
      <legend className="text-lg font-semibold mb-2">Doctor PDFs</legend>
      <div className="flex items-center mb-4">
        <div className="flex justify-center items-center bg-gray-900">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md max-w-md">
          {/* <div className="flex justify-center mb-4">
            <iframe
              src={cloudinaryPdfUrl}
              className="w-full h-48"
              style={{ border: 'none' }}
            ></iframe>
          </div> */}
          <div className="flex justify-center items-center mb-2">
            <img
              src={cloudinaryPngUrl}
              alt="PDF Icon"
              className="w-12 h-12"
            />
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            <button download="medical_report.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              🔗
            </button>
          </div>
          <div className="text-center">
            <a href={cloudinaryPdfUrl} download="medical_report.pdf" className="text-blue-400 hover:underline">
              medical_report.pdf
            </a>
          </div>
      </div>
    </div>

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