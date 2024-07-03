'use client'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useSearchParams } from 'next/navigation';




const generatePDF = async ({
  LabCategory,
  LabName,
  LabAddress,

  PatientName,
  PatientAge,
  PatientGender,

  PatientId,
  LabId,
  ReferencBy,

  RegisteredOn,
  ReportedOn,

  part,
  technique,
  findings,

  img11,
  img22,

  GenerateOn,
  LabPPhone


}) => {

 console.log(process.env.NEXT_PUBLIC_BLOB + img11)
 console.log(img22)
 const imgData = localStorage.getItem('overlayImage');
//  const aorticImage = localStorage.getItem('aorticImage');

  // const doc = new jsPDF();

  // Function to fetch image and convert it to Base64
  const getBase64ImageFromURL = (url) => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      img.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      };
      img.onerror = (error) => {
        reject(error);
      };
    });
  };
 //***********wil Mohammed Abdelwahab get this info from API********* */
 
  // Fetch image from URL
  // const logoURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5XRVQ7xxHNWBa1Hj590AOOFQpP2FxYemRENy37Igew&s'; // Replace with your image URL
  const logoURL = 'https://res.cloudinary.com/dlw9u7jf0/image/upload/v1718979731/logo_3dab7493bc.png'; // Replace with your image URL
  const logoURLback = 'https://res.cloudinary.com/dlw9u7jf0/image/upload/v1718982747/output_onlinepngtools_3cc58f529e.png'; // Replace with your image URL
  const img1URL = process.env.NEXT_PUBLIC_MODEL_HOST_UPLOAD + img22; // Replace with your image URL
//   const img1URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5XRVQ7xxHNWBa1Hj590AOOFQpP2FxYemRENy37Igew&s'; // Replace with your image URL
  const img2URL = process.env.NEXT_PUBLIC_MODEL_HOST_OUTPUT +img22; // Replace with your image URL

  const logo = await getBase64ImageFromURL(logoURL);
  const logoBack = await getBase64ImageFromURL(logoURLback);

  const img1 = await getBase64ImageFromURL(img1URL);
  // const img1 = await getBase64ImageFromURL(aorticImage);
  const img2 = await getBase64ImageFromURL(img2URL);
  // const img2 = await getBase64ImageFromURL(imgData);


  // Initialize the PDF document
const doc = new jsPDF();

// Define colors and fonts
const primaryColor = '#0D47A1';
const textColor = '#000000';
const headerFontSize = 18;
const sectionHeaderFontSize = 12;
const normalFontSize = 10;

// // Add background logo with lower opacity
// const pageWidth = doc.internal.pageSize.getWidth();
// const pageHeight = doc.internal.pageSize.getHeight();
// const imgWidth1 = pageWidth / 2; // half the page width
// const imgHeight1 = pageHeight / 2; // half the page height
// const x = (pageWidth - imgWidth1) / 2; // center the image horizontally
// const y = (pageHeight - imgHeight1) / 2; // center the image vertically
// doc.addImage(logo, 'PNG', x, y, imgWidth1, imgHeight1, '', 'SLOW', 0.05); // lower opacity

// Add background logo with lower opacity
const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const imgSize = Math.min(pageWidth, pageHeight) / 1.5; // half the smaller dimension of the page
const x = (pageWidth - imgSize) / 2; // center the image horizontally
const y = (pageHeight - imgSize) / 2; // center the image vertically
doc.addImage(logoBack, 'PNG', x, y, imgSize, imgSize, '', 'SLOW', 0.05); // lower opacity

// Add logo
doc.addImage(logo, 'PNG', 14, 15, 20, 20);

// Add header text
doc.setFontSize(headerFontSize);
doc.setTextColor(primaryColor);
doc.text('TelEgyCare', 40, 20);
doc.setFontSize(normalFontSize);
doc.setTextColor(textColor);
doc.text(`${LabName}|${LabCategory}`, 40, 26);
doc.text(`${LabAddress}`, 14, 40);

// Add shapes
doc.setDrawColor(primaryColor);
doc.setLineWidth(0.5);
doc.line(14, 45, 196, 45); // Line below header
doc.line(14, 68, 196, 68); // Line below patient details

// Add patient details
doc.text(`Patient Name: ${PatientName}`, 14, 50);
doc.text(`Patient Age: ${PatientAge}`, 14, 55);
doc.text(`Patient Gender: ${PatientGender}`, 14, 60);

doc.text(`PatientId:${PatientId}`, 70, 50);
doc.text(`LabId:${LabId}`, 70, 55);
doc.text(`Ref. By: Dr.${ReferencBy}`, 70, 60);

doc.text('Registered on:', 140, 50);
doc.text(`${RegisteredOn}`, 140, 55);
doc.text('Reported on:', 140, 60);
doc.text(`${ReportedOn}`, 140, 65);

// Add section header
doc.setFontSize(sectionHeaderFontSize);
doc.setTextColor(primaryColor);
// doc.text('CT Aortic', 14, 75);
let text = 'CT Aortic';
let xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2);
doc.text(text, xOffset, 80);

// Add technique and findings
doc.setFontSize(normalFontSize);
doc.setTextColor(textColor);
doc.text('Part', 14, 85);
doc.text(`${part}`, 14, 90);

doc.text('Technique:', 14, 100);
doc.text(`${technique}`, 14, 105, { maxWidth: 180 });

doc.text('Findings:', 14, 125);
doc.text(`${findings}`, 14, 130, { maxWidth: 180 });

// Overlay images
const imgWidth = 80;
const imgHeight = 80;
const imgX = 14;
const imgY = 160;

// doc.addImage(img1, 'PNG', imgX, imgY, imgWidth, imgHeight);
// doc.addImage(img2, 'PNG', 120, imgY, imgWidth, imgHeight);

const scaleFactor = 0.8; // scale factor to make the images smaller
doc.addImage(img1, 'PNG', imgX, imgY, imgWidth * scaleFactor, imgHeight * scaleFactor);
doc.addImage(img2, 'PNG', 120, imgY, imgWidth * scaleFactor, imgHeight * scaleFactor);

// Add signatures
doc.text('Thanks for Reference', 14, 250);
doc.text('Radiologic Technologists', 14, 255);
doc.text('(MSC, PGDM)', 14, 260);

doc.text('****End of Report****', 80, 250);
doc.text(`Dr.${ReferencBy}`, 80, 255);
doc.text('(MD, Radiologist)', 80, 260);

doc.text('Dr. Vimal Shah', 150, 255);
doc.text('(MD, Radiologist)', 150, 260);

// // Add footer
// doc.text('Generated on : 02 Dec, 202X 05:00 PM', 14, 290);
// doc.text('Page 1 of 1', 180, 290);

// Add footer with contact email and WhatsApp
doc.line(14, 270, 196, 270); // Line above footer
doc.setFontSize(10);
doc.text(`Generated on: ${GenerateOn} `, 14, 275);
doc.text(`Contact: WhatsApp: + ${LabPPhone}`, 14, 280);
doc.text('Page 1 of 1', 180, 285);

// Save PDF
doc.save(`medical_report_For${PatientName}_whitId${PatientId}.pdf`);

};
export default generatePDF;



// Add logo
// // doc.addImage(logo, 'PNG', 14, 15, 50, 15);
// doc.addImage(logo, 'PNG', 14, 15, 20, 20);
// // Add header text
// doc.setFontSize(18);
// doc.setTextColor('#0D47A1'); // Color for the logo text
// doc.text('TelEgyCare', 40, 20);
// doc.setFontSize(12);
// doc.setTextColor(0, 0, 0); // Reset color to black for other text
// doc.text('X- Ray | CT-Scan | MRI | USG', 40, 26);
// doc.text('105-108, SMART VISION COMPLEX, OPPOSITE HEALTHCARE COMPLEX, MUMBAI - 689578', 14, 40);

// // Add patient details
// doc.setFontSize(10);
// doc.text('Yashvi M. Patel', 14, 50);
// doc.text(`Age: ${age} Years`, 14, 55);
// doc.text('Sex: Female', 14, 60);

// doc.text('PID: 556', 70, 50);
// doc.text('Apt ID: 2025252', 70, 55);
// doc.text('Ref. By: Dr. Hiren Shah', 70, 60);

// doc.text('Registered on:', 140, 50);
// doc.text('02:31 PM 02 Dec, 2X', 140, 55);
// doc.text('Reported on:', 140, 60);
// doc.text('04:35 PM 02 Dec, 2X', 140, 65);

// // Add section header
// doc.setFontSize(12);
// doc.setTextColor('#0D47A1'); // Color for the section header
// doc.text('CT Aortic', 14, 75);

// // Add technique and findings
// doc.setFontSize(10);
// doc.setTextColor(0, 0, 0); // Reset color to black for other text
// doc.text('Part', 14, 85);
// doc.text(part, 14, 90);

// doc.text('Technique:', 14, 100);
// doc.text(technique, 14, 105, { maxWidth: 180 });

// doc.text('Findings:', 14, 125);
// doc.text(findings, 14, 130, { maxWidth: 180 });

// // Overlay images
// const imgWidth = 80; // Changed width
// const imgHeight = 80; // Changed height
// const imgX = 14;
// const imgY = 160;

// doc.addImage(img1, 'PNG', imgX, imgY, imgWidth, imgHeight);
// doc.addImage(img2, 'PNG', 120, imgY, imgWidth, imgHeight, { opacity: 0.5 });

// // Add signatures
// doc.text('Thanks for Reference', 14, 250);
// doc.text('Radiologic Technologists', 14, 255);
// doc.text('(MSC, PGDM)', 14, 260);

// doc.text('****End of Report****', 80, 250);
// doc.text('Dr. Payal Shah', 80, 255);
// doc.text('(MD, Radiologist)', 80, 260);

// doc.text('Dr. Vimal Shah', 150, 255);
// doc.text('(MD, Radiologist)', 150, 260);

// // Add footer
// doc.text('Generated on : 02 Dec, 202X 05:00 PM', 14, 290);
// doc.text('Page 1 of 1', 180, 290);

// // Save PDF
// doc.save('medical_report.pdf');
// 
