
















// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import jsreport from 'jsreport-browser-client-dist';

// const MakePDF = () => {
//   const { register, handleSubmit } = useForm();
//   const [isGenerating, setIsGenerating] = useState(false);

//   const generatePDF = async (data) => {
//     setIsGenerating(true);

//     const reportOptions = {
//       template: {
//         content: `
//           <html>
//             <body>
//               <h1>Hello, ${data.name}!</h1>
//             </body>
//           </html>
//         `,
//         engine: 'none',
//         recipe: 'chrome-pdf',
//       },
//     };

//     try {
//       const response = await jsreport.renderAsync(reportOptions);
//       const pdfBlob = new Blob([response], { type: 'application/pdf' });
//       const pdfUrl = URL.createObjectURL(pdfBlob);

//       setIsGenerating(false);

//       // Trigger download
//       const link = document.createElement('a');
//       link.href = pdfUrl;
//       link.download = 'my-custom-pdf.pdf';
//       link.click();
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Generate Custom PDF</h1>
//       <form onSubmit={handleSubmit(generatePDF)}>
//         <label htmlFor="name">Name:</label>
//         <input id="name" {...register('name')} required />
//         <button
        
//         type="submit" disabled={isGenerating}>
//           {isGenerating ? 'Generating...' : 'Generate PDF'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MakePDF;