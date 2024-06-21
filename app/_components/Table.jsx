'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function Table({ data ,labRegNum}) {
  const [searchPatients, setSearchPatients] = useState('');
  const router  = useRouter();



 

  const filteredPatients = data.filter(Patient => {
    const name = Patient?.attributes?.patient?.data?.attributes?.Name ?? "";
    const regNum = Patient?.attributes?.patient?.data?.attributes?.reg_Num ?? "";
    const phone = Patient?.attributes?.patient?.data?.attributes?.phone ?? "";
    const NationalId = Patient?.attributes?.patient?.data?.attributes?.NationalId ?? "";
    const Governorate = Patient?.attributes?.patient?.data?.attributes?.Governorate ?? "";
    const City = Patient?.attributes?.patient?.data?.attributes?.City ?? "";
    const Street = Patient?.attributes?.patient?.data?.attributes?.Street ?? "";

  
    return name.toLowerCase().includes(searchPatients.toLowerCase()) ||
           regNum.toLowerCase().includes(searchPatients.toLowerCase()) ||
           phone.toLowerCase().includes(searchPatients.toLowerCase()) ||
           NationalId.toLowerCase().includes(searchPatients.toLowerCase())||
           Governorate.toLowerCase().includes(searchPatients.toLowerCase())||
           City.toLowerCase().includes(searchPatients.toLowerCase())||
           Street.toLowerCase().includes(searchPatients.toLowerCase());
  });
  
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Patient List</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchPatients}
          onChange={(e) => setSearchPatients(e.target.value)}
          className="w-64 px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-auto"
        />
      </div>
      
      <div className="overflow-auto rounded-lg shadow max-h-[500px]">
          <table className="w-full bg-gray-200">
            <thead className="sticky top-0 bg-white">
              <tr>
              <th className="px-4 py-2">Registration number</th>
              <th className="px-4 py-2">Name</th>
               <th className="px-4 py-2">National ID</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Address</th>
         
            </tr>
          </thead>
          <tbody>
         
           { filteredPatients.map((item, index) => (
            
              <tr key={index} >
                {item?.attributes?.pres_state == '1' ? <>

                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}?labRegNum=${labRegNum}&P=PatientDetails`}>
                    #{item?.attributes?.patient?.data?.attributes?.reg_Num}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}?labRegNum=${labRegNum}&P=PatientDetails`}>
                    
               {item?.attributes?.patient?.data?.attributes?.Name}
                  </Link>
                </td>
            
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}?labRegNum=${labRegNum}&P=PatientDetails`}>
                {item?.attributes?.patient?.data?.attributes?.NationalId}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}?labRegNum=${labRegNum}&P=PatientDetails`}>
                {item?.attributes?.patient?.data?.attributes?.phone}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}?labRegNum=${labRegNum}&P=PatientDetails`}>
                    {item?.attributes?.patient?.data?.attributes?.Email}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}?labRegNum=${labRegNum}&P=PatientDetails`}>
                     {item?.attributes?.patient?.data?.attributes?.Governorate},  
                     {item?.attributes?.patient?.data?.attributes?.City}, 
                     {item?.attributes?.patient?.data?.attributes?.Street}
                      
                  </Link>
          
                </td>
              
                </> : <></>
                }

              </tr>
    
            )
            )
            }
                
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

