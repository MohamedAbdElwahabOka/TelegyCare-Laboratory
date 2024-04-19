// 'use client'
// import React ,{useRef} from 'react'
// import { useReactToPrint } from 'react-to-print';
// import { useSearchParams } from 'next/navigation'
// import Image from 'next/image';
// import Segmentation from '../../AiResult/img//Segmentation.jpg'

// export default function Button() {
//     const componentRef = useRef();
//     const handlePrint = useReactToPrint({
//       content: () => componentRef.current,
//       documentTitle:"Report",
//       onAfterPrint:()=>{alert("after print")}
//     });
//     const SearchParams =useSearchParams(); 
//     const  name = SearchParams.get('name');
//     const  age = SearchParams.get('age');
//     console.log(SearchParams.get('name'));
//     console.log(SearchParams.get('age'));
//   return (
//     <>
//      <div ref={componentRef} style={{width: '100%' ,height:window.innerHeight}}>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         <Image
//       src={Segmentation}
//       width={300}
//       height={300}
//       alt="Segmentation of the Ultrasound Image"
//       className="rounded-2xl"
//     />
//      </div>
//         <button onClick={handlePrint}>Print this out!</button>
//     </>
//   )
// }
