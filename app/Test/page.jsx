'use client'
import React from 'react'
import { useEffect, useState } from 'react';

function page() {

  const cloudinaryPdfUrl = "https://res.cloudinary.com/dlw9u7jf0/image/upload/v1718825281/medical_report_8_c51dbddd08.pdf";
    // const [pdfUrl, setPdfUrl] = useState('https://res.cloudinary.com/dlw9u7jf0/image/upload/v1718825281/medical_report_8_c51dbddd08.pdf');
  return (
//     <iframe
//   src="C:\Users\mohamed\Downloads\medical_report (61).pdf"
//   style={{ width: '100%', height: '500px', border: 'none' }}
//   allow="fullscreen"
// ></iframe>
<div>
      <h1>PDF Viewer</h1>
      <div style={{ width: '600px', height: '400px', border: '1px solid #ccc', marginBottom: '20px' }}>
        <iframe
          src={cloudinaryPdfUrl}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
      <a href={cloudinaryPdfUrl} download="my-document.pdf">
        Download PDF
      </a>
    </div>
  )
}

export default page
