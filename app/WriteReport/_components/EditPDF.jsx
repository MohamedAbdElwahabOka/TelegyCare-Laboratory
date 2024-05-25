import { PDFDocument } from 'pdf-lib';

const EditPDF = ({ file }) => {
  const editPDF = async () => {
    const pdfDoc = await PDFDocument.load(file);
    const page = pdfDoc.getPages()[0];
    page.drawText('New Text', { x: 50, y: 50 });
    const pdfBytes = await pdfDoc.save();
    savePDF(pdfBytes, 'edited-pdf.pdf');
  };

  const savePDF = (data, fileName) => {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
  };

  return <button onClick={editPDF}>Edit PDF</button>;
};