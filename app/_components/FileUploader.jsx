'use client'
import { useState } from 'react';
import Image from 'next/image';

function FileUploader() {
   const [files, setFiles] = useState([]);
   const [imageSrc, setImageSrc] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemove = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
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
      if (response.ok) {
        const data = await response.json();
        setImageSrc(data.imageUrl);
      } else {
        alert('Failed to upload files');
      }
    } catch (error) {
      console.log('Error:', error);
    }

    // e.preventDefault();
    // const formData = new FormData();
    // files.forEach((file) => formData.append('files', file));
    // try {
    //   const response = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   if (response.ok) {
    //     alert('Files uploaded successfully');
    //   } else {
    //     alert('Failed to upload files');
    //   }
    // } catch (error) {
    //   console.error(error);
    //   alert('Failed to upload files');
    // }
  };


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
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full mt-4"
      >
        Send To AI
      </button>
    </div>
    {imageSrc && <Image src={imageSrc} alt="Uploaded" width={500} height={500} />}
    
  
    </div>
  )
}

export default FileUploader
