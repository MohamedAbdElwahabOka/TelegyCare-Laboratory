'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
// import sharp from 'sharp';
// import { v4 as uuidv4 } from 'uuid';
// import fs from 'fs/promises';

function FileUploader({PatienID,labRegNum}) {

  console.log(process.env.NEXT_PUBLIC_BLOB); 
  console.log(process.env.NEXT_PUBLIC_MODEL_HOST); 
   const router  = useRouter();  
   const [files, setFiles] = useState([]);
   const [OriginalImgSrc, setOriginalImgSrc] = useState(null);
   const [SegmentedImgSrc, setSegmentedImgSrc] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleChange = async (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    // setOriginalImgSrc(URL.createObjectURL(e.target.files[0]).replace('blob:http://localhost:3000/', ''));

   
    const formData = new FormData();
    newFiles.forEach((file) => formData.append('file', file));
    try {
      Swal.fire({
        title: 'Loading...',
        html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
        timer:1500,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        customClass: {
          popup: 'my-custom-popup'
        }
     
      });
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
      console.log(response)
     
      if (response.ok) {
        const jsonData = await response.json();
        const imageUrl = jsonData.image_url;
        // setSegmentedImgSrc(imageUrl);
        // setSegmentedImgSrc(`http://localhost:5000${imageUrl}`);
        setSegmentedImgSrc(imageUrl.replace('/output/', ''));
        // Swal.close();

      } else {
        // alert('Failed to upload files');
        Swal.fire({
          title: 'Error!',
          text: 'Oops! Failed to upload files',
          icon: 'error',
          confirmButtonText: 'close'
        })
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Oops! Error',
        icon: 'error',
        confirmButtonText: 'close'
      })
    }
   
  };
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Sending to AI',
      html: '<img class="my-ai-gif" src="/icons8-ai.gif" alt="Loading..." />',
      timer:4000,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      customClass: {
        popup: 'my-custom-popup'
      }
    }).then(() => {
      if(SegmentedImgSrc){
        console.log("done")
        router.push(`/AiResult/${PatienID}?labRegNum=${labRegNum}&SegmentedImgSrc=${SegmentedImgSrc}`);
      }else{
        console.log("none")
        Swal.fire({
          title: 'Error!',
          text: 'Oops! Send Again',
          icon: 'error',
          confirmButtonText: 'close'
        })
      }
    });
  };

  const handleRemove = (indexToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
    setOriginalImgSrc(null);
    setSegmentedImgSrc(null);
  };


 console.log(files)
 console.log(OriginalImgSrc)
 console.log(SegmentedImgSrc)






  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-8 border border-gray-300 p-4 rounded-md shadow-md file-uploader">
      <div
        className="w-full h-64 border-dashed border-2 border-gray-300 border-2 rounded-md flex flex-col justify-center items-center drop-zone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="text-gray-500 text-xl">Drag and drop files here</div>
        <div className="text-gray-500">or</div>
        <label
          htmlFor="file-input"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Browse files
        </label>
        <input
          type="file"
          id="file-input"
          multiple
          className="hidden"
          onChange={handleChange}
        />
      </div>
      <div className="mt-4">
        <ul className="list-disc list-inside">
          {files.map((file, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">{file.name}</span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      {process.env.NEXT_PUBLIC_MODEL_HOST_UPLOAD&&SegmentedImgSrc && (
  <div className="flex justify-center items-center ">
    <img src={`http://localhost:5000/upload/${SegmentedImgSrc}`} alt="Preview" className="w-32 h-32 object-cover " />
  </div>)}
      <button
      // href={`/AiResult/${PatienID}?labRegNum=${labRegNum}`}
        type="submit"
        onClick={

          (e) => {
            e.preventDefault();
            handleSubmit(e)
          }}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full mt-4"
      >
        Send To AI
      </button>
    </div>


    {/* {OriginalImgSrc && <Image src={OriginalImgSrc} alt="Preview" width={500} height={500} />}    

    
    {
    
    SegmentedImgSrc && <Image src={SegmentedImgSrc} alt="Preview" width={500} height={500} />
    
    }    
   */}
    </div>
  )
}

export default FileUploader



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   Array.from(files).forEach((file) => formData.append('file', file));
  //   try {
  //     const response = await fetch('http://localhost:5000/predict', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       const jsonData = await response.json();
  //       const imageBase64 = jsonData.image;
  //       const OriginalImgSrc = `data:image/jpeg;base64,${imageBase64}`;
  //       setSegmentedImgSrc(OriginalImgSrc);
  //     } else {
  //       alert('Failed to upload files');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   Array.from(files).forEach((file) => formData.append('file', file));
  //   try {
  //     const response = await fetch('http://localhost:5000/predict', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       const blob = await response.blob();
  //       console.log(blob)
  //       const objectURL = URL.createObjectURL(blob);
  //       setOriginalImgSrc(objectURL);
  //     } else {
  //       alert('Failed to upload files');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  //  const convertWhiteToGreen = async (imageUrl) => {
//   const imageBuffer = await fetch(imageUrl)
//     .then(response => response.arrayBuffer())
//     .then(arrayBuffer => Buffer.from(arrayBuffer));

//   const image = sharp(imageBuffer);
//   const { width, height } = await image.metadata();

//   for (let y = 0; y < height; y++) {
//     for (let x = 0; x < width; x++) {
//       const pixel = await image.getPixel(x, y);
//       if (pixel.r === 255 && pixel.g === 255 && pixel.b === 255) {
//         // Change white pixels to green
//         await image.modifyPixel(x, y, { r: 0, g: 255, b: 0 });
//       }
//     }
//   }

//   const greenImageBuffer = await image.toBuffer();
//   const greenImageURL = URL.createObjectURL(new Blob([greenImageBuffer], { type: 'image/png' }));

//   return greenImageURL;
// };