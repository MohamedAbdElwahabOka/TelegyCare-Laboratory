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


function Ai_result({params}) {
  const searchParams = useSearchParams();
  const labRegNumber = searchParams.get('labRegNum');


  const labRegNum = searchParams.get('labRegNum')
  const OriginalImgSrc = searchParams.get('OriginalImgSrc')
  const SegmentedImgSrc = searchParams.get('SegmentedImgSrc')
  console.log(labRegNum)
  console.log(process.env.NEXT_PUBLIC_BLOB + OriginalImgSrc)
  console.log(process.env.NEXT_PUBLIC_MODEL_HOST + SegmentedImgSrc)

  const [formData, setFormData] = useState({
    part: '',
    technique: '',
    findings: '',
    age: '',
    img11:OriginalImgSrc,
    img22:SegmentedImgSrc
  });
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

  console.log(params.Patientid)
  return (
    <div>
     <div className="flex h-screen">  
     <Sidebar_for_PatientD PatientID={params.Patientid}  labRegNum={labRegNumber}  className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">

      <Image
                    src={process.env.NEXT_PUBLIC_BLOB + OriginalImgSrc}
                    width={300}
                    height={300}
                    alt="Aortic Ultrasound Image"
                    className="rounded-2xl"
                  />
      <form>
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
      <button onClick={handleGeneratePDF}>Generate PDF</button>


      </div>
    </div>
    </div>
  )
}

export default Ai_result
