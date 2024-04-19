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

    const doc = new jsPDF();
    doc.text('Hello, ' + data.name, 10, 10); // Customize content and styles
    doc.text('Email: ' + data.email, 10, 20);
    doc.text('Date: ' + data.date, 10, 30);
    doc.text('Age: ' + data.age, 10, 40);

    if (data.image1[0]) {
      const reader1 = new FileReader();
      reader1.onload = function(event) {
        const imageData1 = event.target.result;
        doc.addImage(imageData1, 'PNG', 10, 50, 50, 50); // Customize image position and dimensions
        if (data.image2[0]) {
          const reader2 = new FileReader();
          reader2.onload = function(event) {
            const imageData2 = event.target.result;
            doc.addImage(imageData2, 'PNG', 70, 50, 50, 50); // Customize image position and dimensions
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

    setName(data.name); // Update state for display
    setIsGenerating(false);
  };

  return (
    <div>
      <h1>Generate PDF with Name, Email, Date, Age, and Images</h1>
      <form onSubmit={handleSubmit(generatePDF)}>
        <label htmlFor="name">Name:</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span className="error">Name is required</span>}
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span className="error">Email is required</span>}
        <br />
        <label htmlFor="date">Date:</label>
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
        <br />
        <button type="submit" disabled={isGenerating}>
          {isGenerating ? 'Generating PDF...' : 'Generate PDF'}
        </button>
      </form>
      {/* {name && <p>Your name: {name}</p>} */}
    </div>
  );
};

export default Make;


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
