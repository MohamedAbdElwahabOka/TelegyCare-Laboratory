import React, { useState } from "react";
import medicalrecordAPI from "../../_Utils/medicalrecordAPI";
import Swal from "sweetalert2";

function SendResults({ medicalRecords, patientid }) {
  /*
  !---------------------------------------------start update medical-----------------------------------------------
  */
  const [LabNote, setLabNote] = useState("");
  const [sending, setSending] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState(""); 
  const [uploadedFileID, setuploadedFileID] = useState("");
  const [uploading, setUploading] = useState(false); 
 
  const handleLabNote = (e) => {
    setLabNote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    setSending(true);

    const data = {
      data: {
        Lab_note: LabNote,
        pres_state: '2',
        // Lab_Files:{
        //   id: uploadedFileID
        // }
        Lab_Files:{
        
                id: uploadedFileID
      }
      }
    };
    
   console.log(medicalRecords[0].id)
    try {
      await medicalrecordAPI.addLabNote(medicalRecords[0].id, data);

      // await medicalrecordAPI.addLabNote(medicalRecords[0].id, datapdf);
      setLabNote("");
      setUploadedFileName("");
      Swal.fire({
        icon: "success",
        title: "Sent Successfully",
        text: "Lab Pdf sent successfully.",
      });
    } catch (error) {
      console.error("Error sending note:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error sending the note.",
      });
    } finally {
      setSending(false);
    }
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("files", selectedFile);

      setUploading(true); // Set uploading state to true

      try {
        const response = await fetch("http://localhost:1337/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("File uploaded:", data);
        console.log(data[0].id)
        setUploadedFileName(data[0].name);
        setuploadedFileID(data[0].id) 

        Swal.fire({
          icon: "success",
          title: "PDF Uploaded",
          text: "The PDF file has been uploaded successfully.",
        });
      } catch (error) {
        console.error("Error uploading file:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was an error uploading the PDF file.",
        });
      } finally {
        setUploading(false); // Reset uploading state
      }
    }
    
  };
  
  /*
  !---------------------------------------------End update medical-----------------------------------------------------------
  */
  const isSendButtonDisabled = !uploadedFileName || sending;

  return (
    <div>
      <h5 className="text-lg font-semibold text-gray-700 mr-10">Send Result</h5>
      <div className="max-w-md mx-auto bg-white rounded-lg border shadow-md p-4">
        <div className="mb-3">
          <h5 className="text-lg font-semibold">
            <span>
              Dr.{" "}
              {medicalRecords[0]?.attributes?.doctor?.data?.attributes?.Name}
            </span>
          </h5>
          <p className="text-sm text-gray-500 ml-7">
            <span>
              {
                medicalRecords[0]?.attributes?.doctor?.data?.attributes
                  ?.Type_of_Spec
              }
            </span>
          </p>
          <hr className="w-60 ml-1 mt-2" />
        </div>
        <hr className="my-1 mt-40" />
        {/* Display uploaded PDF file name */}
        {uploadedFileName && (
          <div className="flex items-center mb-3">
            {uploading ? (
              <LoadingIcon className="text-blue-500 mr-2" />
            ) : (
              <UploadIcon className="text-blue-500 mr-2" />
            )}
            <span className="text-gray-700 truncate">{uploadedFileName}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <label
              htmlFor="file-input"
              className="rounded-full bg-blue-500 text-white p-2 cursor-pointer"
            >
              {uploading ? (
                <LoadingIcon className="text-white" />
              ) : (
                <UploadIcon className="text-white" />
              )}
            </label>
            <input
              id="file-input"
              type="file"
              className="hidden"
              accept=".pdf"
              onChange={handleFileChange}
            />
            <div className="flex-grow mx-2">
              <input
                id="LabNote"
                name="LabNote"
                type="text"
                placeholder="Write your Note here..."
                className="w-full rounded-full pl-10 pr-10 py-2 border bg-gray-100"
                value={LabNote}
                onChange={handleLabNote}
              />
            </div>
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded-full ${
                isSendButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSendButtonDisabled}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function LoadingIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin h-5 w-5 mr-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a10 10 0 0 1 0 20" />
    </svg>
  );
}

export default SendResults;
