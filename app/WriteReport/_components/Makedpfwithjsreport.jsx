'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { renderReport } from 'jsreport-client';

const Makedpfwithjsreport = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [name, setName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async (data) => {
    setIsGenerating(true);

    const reportData = {
      // Pass user data and any other dynamic content here
      name: data.name,
    };

    const reportOptions = {
      // Specify report template and other options
      type: 'pdf', // Set output format to PDF
      template: {
        recipe: 'chrome-pdf', // Use Chrome-based PDF generation
        content: `
          <!DOCTYPE html>
          <html>
            <head>
              <title>Custom PDF with jsreport</title>
              <style>
                /* Your custom CSS styles for the PDF layout */
                body {
                  font-family: Arial, sans-serif;
                }
                h1 {
                  text-align: center;
                }
              </style>
            </head>
            <body>
              <h1>Welcome, ${reportData.name}!</h1>
              <p>This is a custom PDF generated using jsreport.</p>
              </body>
          </html>
        `,
      },
    };

    try {
      const response = await renderReport(reportOptions, reportData);
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      setName(data.name); // Update state for display
      setIsGenerating(false);

      // Optionally trigger download (user interaction required for security)
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'my-custom-pdf.pdf';
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
      setIsGenerating(false); // Handle errors appropriately
    }
  };

  return (
    <div>
      <h1>Generate Custom PDF</h1>
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

export default Makedpfwithjsreport;