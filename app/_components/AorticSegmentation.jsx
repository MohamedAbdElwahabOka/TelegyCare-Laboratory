import React from 'react';

export default function AorticSegmentation() {
  return (
    <div>
      <div className="p-8">
        <div className="text-3xl font-bold mb-4">Al Result</div>
        <div className="text-2xl font-semibold mb-4">Aortic Segmentation</div>
        <div className="flex space-x-4 mb-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Save PDF
          </button>
          {/* <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
            Al Result
          </button> */}
          <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
            Aortic Segmentation
          </button>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="text-xl font-semibold mb-2">Ultrasound Image of the Heart</div>
          <div className="flex justify-center">
            <div className="flex space-x-4">
              <img
                src=""
                alt="Ultrasound image of the heart"
                className="w-1/2 h-auto"
              />
              <img
                src=""
                alt="Ultrasound image of the heart"
                className="w-1/2 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}