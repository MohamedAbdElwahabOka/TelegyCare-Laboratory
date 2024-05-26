'use client'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useSearchParams } from 'next/navigation';
const generatePDF = async ({ part, technique, findings, age,img11,img22 }) => {

 console.log(process.env.NEXT_PUBLIC_BLOB + img11)
 console.log(img22)

  const doc = new jsPDF();

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
  const logoURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5XRVQ7xxHNWBa1Hj590AOOFQpP2FxYemRENy37Igew&s'; // Replace with your image URL
  const img1URL = process.env.NEXT_PUBLIC_MODEL_HOST_UPLOAD + img22; // Replace with your image URL
//   const img1URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5XRVQ7xxHNWBa1Hj590AOOFQpP2FxYemRENy37Igew&s'; // Replace with your image URL
  const img2URL = process.env.NEXT_PUBLIC_MODEL_HOST_OUTPUT +img22; // Replace with your image URL

  const logo = await getBase64ImageFromURL(logoURL);
  const img1 = await getBase64ImageFromURL(img1URL);
  const img2 = await getBase64ImageFromURL(img2URL);

  // Add logo
doc.addImage(logo, 'PNG', 14, 15, 50, 15);

// Add header text
doc.setFontSize(18);
doc.setTextColor('#0D47A1'); // Color for the logo text
doc.text('TelEgyCare', 70, 20);
doc.setFontSize(12);
doc.setTextColor(0, 0, 0); // Reset color to black for other text
doc.text('X- Ray | CT-Scan | MRI | USG', 70, 26);
doc.text('105-108, SMART VISION COMPLEX, OPPOSITE HEALTHCARE COMPLEX, MUMBAI - 689578', 14, 40);

// Add patient details
doc.setFontSize(10);
doc.text('Yashvi M. Patel', 14, 50);
doc.text(`Age: ${age} Years`, 14, 55);
doc.text('Sex: Female', 14, 60);

doc.text('PID: 556', 70, 50);
doc.text('Apt ID: 2025252', 70, 55);
doc.text('Ref. By: Dr. Hiren Shah', 70, 60);

doc.text('Registered on:', 140, 50);
doc.text('02:31 PM 02 Dec, 2X', 140, 55);
doc.text('Reported on:', 140, 60);
doc.text('04:35 PM 02 Dec, 2X', 140, 65);

// Add section header
doc.setFontSize(12);
doc.setTextColor('#0D47A1'); // Color for the section header
doc.text('CT Aortic', 14, 75);

// Add technique and findings
doc.setFontSize(10);
doc.setTextColor(0, 0, 0); // Reset color to black for other text
doc.text('Part', 14, 85);
doc.text(part, 14, 90);

doc.text('Technique:', 14, 100);
doc.text(technique, 14, 105, { maxWidth: 180 });

doc.text('Findings:', 14, 125);
doc.text(findings, 14, 130, { maxWidth: 180 });

// Overlay images
const imgWidth = 80; // Changed width
const imgHeight = 80; // Changed height
const imgX = 14;
const imgY = 160;

doc.addImage(img1, 'PNG', imgX, imgY, imgWidth, imgHeight);
doc.addImage(img2, 'PNG', 120, imgY, imgWidth, imgHeight, { opacity: 0.5 });

// Add signatures
doc.text('Thanks for Reference', 14, 250);
doc.text('Radiologic Technologists', 14, 255);
doc.text('(MSC, PGDM)', 14, 260);

doc.text('****End of Report****', 80, 250);
doc.text('Dr. Payal Shah', 80, 255);
doc.text('(MD, Radiologist)', 80, 260);

doc.text('Dr. Vimal Shah', 150, 255);
doc.text('(MD, Radiologist)', 150, 260);

// Add footer
doc.text('Generated on : 02 Dec, 202X 05:00 PM', 14, 290);
doc.text('Page 1 of 1', 180, 290);

// Save PDF
doc.save('medical_report.pdf');
};

export default generatePDF;
