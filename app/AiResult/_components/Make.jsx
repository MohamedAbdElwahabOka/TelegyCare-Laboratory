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

    const pdfBlob = await doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);

    setName(data.name); // Update state for display
    setIsGenerating(false);

    // Optionally trigger download (user interaction required for security)
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'my-pdf.pdf';
    link.click();
  };

  return (
    <div>
      <h1>Generate PDF with Name</h1>
      <form onSubmit={handleSubmit(generatePDF)}>
        <label htmlFor="name">Name:</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span className="error">Name is required</span>}
        <button type="submit" disabled={isGenerating}>
          {isGenerating ? 'Generating PDF...' : 'Generate PDF'}
        </button>
      </form>
      {name && <p>Your name: {name}</p>}
    </div>
  );
};

export default Make;
