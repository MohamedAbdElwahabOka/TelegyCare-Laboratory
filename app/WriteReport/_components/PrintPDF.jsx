'use client'
import React, { useRef} from 'react';
import { useReactToPrint } from 'react-to-print';


function PrintPDF() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'AI Result',
        onAfterPrint: () => alert('Printed!')
    });
  return (
    <>
    {/* style={{width: '100%' ,height: window.innerHeight}} */}
    <div ref={componentRef} >
        <h1 className='text-center my-3 py-2'>  
              AI Result
        </h1>
        <button onClick={handlePrint}>print pdf </button>

    </div>
      
    </>
  )
}

export default PrintPDF
