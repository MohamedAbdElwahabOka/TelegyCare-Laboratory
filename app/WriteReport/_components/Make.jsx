'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { jsPDF } from 'jspdf';

const Make = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [name, setName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async (data) => {
    setIsGenerating(true);

    try {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.text('Personal Information', 10, 15);
      doc.setFontSize(14);

      
      //***********wil Mohamed aaabdelwahab get this info from API********* */
      // doc.text('Name: ' + data.name, 10, 30);
      // doc.text('Email: ' + data.email, 10, 45);
      // doc.text('Date of Birth: ' + data.date, 10, 60);
      // doc.text('Age: ' + data.age, 10, 75);



      
      doc.text('Part: '+data.part ,10, 30);
      doc.text('Technique: '+data.technique ,10, 45);



      
      doc.addPage(); // Add a new page for images
      if (data.image1[0]) {
        const reader1 = new FileReader();
        reader1.onload = function(event) {
          const imageData1 = event.target.result;
          doc.addImage(imageData1, 'PNG', 10, 10, 100, 100); // Customize image position and dimensions
          if (data.image2[0]) {
            const reader2 = new FileReader();
            reader2.onload = function(event) {
              const imageData2 = event.target.result;
              doc.addImage(imageData2, 'PNG', 120, 10, 100, 100); // Customize image position and dimensions
              doc.save('my-pdf.pdf'); // Save the PDF with both images
            };
            reader2.readAsDataURL(data.image2[0]);
          } else {
            doc.save('my-pdf.pdf'); // Save the PDF with only the first image
          }
        };
        reader1.readAsDataURL(data.image1[0]);
      } else {
        doc.save('my-pdf.pdf'); // Save the PDF without any image
      }

      // setName(data.name); // Update state for display
      setIsGenerating(false);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setIsGenerating(false);
      // Optionally, you can display an error message to the user
    }
  };

  return (

    <div class="flex items-center justify-center h-screen bg-white">
      <div class="max-w-md bg-white shadow-md rounded-lg px-8 py-12">
        <h1 class="text-2xl font-bold text-center mb-4">Generate Custom PDF</h1>

    <form onSubmit={handleSubmit(generatePDF)}>
      <div class="mb-4">
        <label htmlFor="part" class="block text-gray-700 text-sm font-bold mb-2">Part:</label>
        <input
          type="text"
         
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-teal-500"
          {...register('part', { required: true })}
        />
        {errors.part && <span class="text-red-500 text-sm">Part is required</span>}
      </div>
       
      <div class="mb-4">
        <label htmlfor="technique" class="block text-gray-700 text-sm font-bold mb-2">Technique:</label>
        <input
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-teal-500"
          {...register('technique', { required: true })}
        />
        {errors.technique && <span class="text-red-500 text-sm">Technique is required</span>} 
         </div>

         {/* ****************************we will remove this part***************************** */}
         <label htmlFor="image1">Image 1:</label>
        <input type="file" {...register('image1', { required: true })} accept="image/*" />
        {errors.image1 && <span className="error">Image 1 is required</span>}
        <br />
        <label htmlFor="image2">Image 2:</label>
        <input type="file" {...register('image2', { required: true })} accept="image/*" />
        {errors.image2 && <span className="error">Image 2 is required</span>}
     {/* ********************************************************* */}
        <button
        type="submit"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50 cursor-pointer float-right"  disabled={isGenerating}
      >
        {isGenerating ? 'Generating PDF...' : 'Generate PDF'}
      </button>


        
      </form>
      {/* {name && <p>Your name: {name}</p>} */}
    </div></div>
  );
};

export default Make;
      
        {/* <label htmlFor="email">Email:</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span className="error">Email is required</span>}
        <br />
        <label htmlFor="date">Date of Birth:</label>
        <input type="date" {...register('date', { required: true })} />
        {errors.date && <span className="error">Date is required</span>}
        <br />
        <label htmlFor="age">Age:</label>
        <input type="number" {...register('age', { required: true })} />
        {errors.age && <span className="error">Age is required</span>}
        <br />
        <label htmlFor="image1">Image 1:</label>
        <input type="file" {...register('image1', { required: true })} accept="image/*" />
        {errors.image1 && <span className="error">Image 1 is required</span>}
        <br />
        <label htmlFor="image2">Image 2:</label>
        <input type="file" {...register('image2', { required: true })} accept="image/*" />
        {errors.image2 && <span className="error">Image 2 is required</span>}
        <br />*/}








// 'use client'
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { jsPDF } from 'jspdf';

// const Make = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const [name, setName] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);

//   const generatePDF = async (data) => {
//     setIsGenerating(true);

//     const doc = new jsPDF();
//     doc.text('Hello, ' + data.name, 10, 10); // Customize content and styles

//     const pdfBlob = await doc.output('blob');
//     const pdfUrl = URL.createObjectURL(pdfBlob);

//     setName(data.name); // Update state for display
//     setIsGenerating(false);

//     // Optionally trigger download (user interaction required for security)
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = 'my-pdf.pdf';
//     link.click();
//   };

//   return (
//     <div>
//       <h1>Generate PDF with Name</h1>
//       <form onSubmit={handleSubmit(generatePDF)}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" {...register('name', { required: true })} />
//         {errors.name && <span className="error">Name is required</span>}
//         <button type="submit" disabled={isGenerating}>
//           {isGenerating ? 'Generating PDF...' : 'Generate PDF'}
//         </button>
//       </form>
//       {name && <p>Your name: {name}</p>}
//     </div>
//   );
// };

// export default Make;
