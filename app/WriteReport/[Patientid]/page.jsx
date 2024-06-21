'use client'
import React from 'react'
import Sidebar from '../../_components/Sidebar'
import Sidebar_for_PatientD from '../../patient-details/[patientId]/_components/Sidebar_for_PatientD'
import Make from '../_components/Make'
import Form from "../_components/Form"
import PrintPDF from '../_components/PrintPDF'
import { useSearchParams } from 'next/navigation';
import generatePDF from '../_components/generatePDF';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect} from 'react'
import PatientAPI from '../../_Utils/PatientAPI';
import LaboratoriesAPI from '../../_Utils/LaboratoriesAPI'


function Ai_result({params}) {
  const searchParams = useSearchParams();
  const labRegNumber = searchParams.get('labRegNum');


  const labRegNum = searchParams.get('labRegNum')
  const OriginalImgSrc = searchParams.get('OriginalImgSrc')
  const SegmentedImgSrc = searchParams.get('SegmentedImgSrc')
  console.log(labRegNum)
  console.log(params.Patientid)
  console.log(process.env.NEXT_PUBLIC_BLOB + OriginalImgSrc)
  console.log(process.env.NEXT_PUBLIC_MODEL_HOST + SegmentedImgSrc)
  function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

  const now = new Date();
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(now);
  console.log(formattedDateTime);

  const [patientDetails, setPatientDetails] = useState({});
  const [laboratoriesDetails, setLaboratoriesDetails] = useState({});

  useEffect(() => {
    getPatientById_();
  }, [params.Patientid]);
  const getPatientById_ = () => {
  
      PatientAPI.getPatientById(params.Patientid).then((res) => {
        console.log("patient item ", res.data.data);
        setPatientDetails(res.data.data);
      });
    };

    useEffect(() => {
      getLaboratoreyByRegNum_();
    }, [labRegNum]);
    const getLaboratoreyByRegNum_ = () => {
    
      LaboratoriesAPI.getLaboratoreyByRegNum(labRegNum).then((res) => {
          console.log("Lab item ", res.data.data);
          setLaboratoriesDetails(res.data.data);
        });
      };
  
    console.log(laboratoriesDetails);
    console.log(patientDetails);


    const patientName = patientDetails?.attributes?.Name;
    const patientREg = patientDetails?.attributes?.reg_Num;
    const patientAge = calculateAge(patientDetails?.attributes?.Birth_Date);
    const patientGender = patientDetails?.attributes?.Gender;

    const LabName = laboratoriesDetails[0]?.attributes?.Name
    const LabCategory = laboratoriesDetails[0]?.attributes?.Category
    const LabAdd = laboratoriesDetails[0]?.attributes?.Address
    // const LabEmail = laboratoriesDetails[0]?.attributes?.Email
    const LabPhone = laboratoriesDetails[0]?.attributes?.phone

    console.log(patientName)
    console.log(patientGender)
    console.log(patientAge)

    console.log(LabName)
    // console.log(LabEmail)
    console.log(LabCategory)
    console.log(LabAdd)
    console.log(LabPhone)

  

   const [formData, setFormData] = useState({
    // LabCategory:LabCategory,
    // LabName:LabName,
    // LabAddress:LabAdd,

    // PatientName:patientName,
    // PatientAge:patientAge,
    // PatientGender:patientGender,

    // PatientId:patientREg,
    // LabId:labRegNum,
    ReferencBy: '',

    // RegisteredOn:formattedDateTime,
    // ReportedOn:formattedDateTime,
    


    part: '',
    technique: '',
    findings: '',

    img11:OriginalImgSrc,
    img22:SegmentedImgSrc,

    // GenerateOn:formattedDateTime,
    // LabPPhone:LabPhone
    
  });

  formData.LabCategory = LabCategory;
  formData.LabName = LabName;
  formData.LabAddress = LabAdd;
  formData.PatientName = patientName;
  formData.PatientAge = patientAge;
  formData.PatientGender = patientGender;
  formData.PatientId = patientREg;
  formData.LabId = labRegNum;
  formData.RegisteredOn = formattedDateTime;
  formData.ReportedOn = formattedDateTime;
  // formData.img11 = OriginalImgSrc;
  // formData.img22 = SegmentedImgSrc;
  formData.GenerateOn = formattedDateTime;
  formData.LabPPhone = LabPhone;



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGeneratePDF = async () => {
    await generatePDF(formData);
  };


  return (
    <div>
     <div className="flex h-screen">  
     <Sidebar_for_PatientD PatientID={params.Patientid}  labRegNum={labRegNumber}  className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">

                   {/* <Image
                    src={process.env.NEXT_PUBLIC_BLOB + OriginalImgSrc}
                    width={300}
                    height={300}
                    alt="Aortic Ultrasound Image"
                    className="rounded-2xl"
                  /> */}
      {/* <form>
        <div>
          <label>Part:</label>
          <input type="text" name="part" value={formData.part} onChange={handleChange} />
        </div>
        <div>
          <label>Technique:</label>
          <textarea name="technique" value={formData.technique} onChange={handleChange} />
        </div>
        <div>
          <label>Findings:</label>
          <textarea name="findings" value={formData.findings} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>

      </form>
      <button onClick={handleGeneratePDF}>Generate PDF</button> */}



<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white border border-gray-300 rounded shadow-lg">
      <div className="mb-4 flex items-center">
          <div className="flex items-center mr-24">
            <label className="block text-gray-700 text-sm font-bold mr-2">Name:</label>
            <label className="block text-gray-700 text-sm font-bold ">{patientName}</label>
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 text-sm font-bold mr-2">Age:</label>
            <label className="block text-gray-700 text-sm font-bold">{patientAge}</label>
          </div>
        </div>
        <form className="space-y-4">
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Referenc By:</label>
            <input
              type="text"
              name="ReferencBy"
              value={formData.ReferencBy}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Part:</label>
            <input
              type="text"
              name="part"
              value={formData.part}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Technique:</label>
            <textarea
              name="technique"
              value={formData.technique}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Findings:</label>
            <textarea
              name="findings"
              value={formData.findings}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          
        </form>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleGeneratePDF}
            className="text-blue-500 hover:text-blue-700 font-bold"
          >
            Generate PDF
          </button>
        </div>
      </div>
    </div>

      </div>
    </div>
    </div>
  )
}

export default Ai_result
