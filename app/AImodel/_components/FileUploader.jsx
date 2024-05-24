'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import sharp from 'sharp';

function FileUploader({PatienID,labRegNum}) {
  
   const [files, setFiles] = useState([]);
   const [imageSrc, setImageSrc] = useState(null);
   const [imageSrc2, setImageSrc2] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append('file', file));
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
      console.log(response)

      if (response.ok) {
        const jsonData = await response.json();
        const imageUrl = jsonData.image_url;
        // setImageSrc2(imageUrl);
        setImageSrc2(`http://localhost:5000${imageUrl}`);

      } else {
        alert('Failed to upload files');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
  //       const imageSrc = `data:image/jpeg;base64,${imageBase64}`;
  //       setImageSrc2(imageSrc);
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
  //       setImageSrc(objectURL);
  //     } else {
  //       alert('Failed to upload files');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

 console.log(files)
 console.log(imageSrc)
 console.log(imageSrc2)

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
      <Link
      href={`/AiResult/${PatienID}?labRegNum=${labRegNum}`}
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full mt-4"
      >
        Send To AI
      </Link>
    </div>


    {imageSrc && <Image src={imageSrc} alt="Preview" width={500} height={500} />}    

    
    {
    
    imageSrc2 && <Image src={imageSrc2} alt="Preview" width={500} height={500} />
    
    }    
  
    </div>
  )
}

export default FileUploader
