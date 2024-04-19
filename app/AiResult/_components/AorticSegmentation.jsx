import React from 'react';
import Image from 'next/image'
import Aortic from '../img/Aortic.jpg'
import Segmentation from '../img/Segmentation.jpg'
import Link from 'next/link';
export default function AorticSegmentation() {
  return (
    <div>
      <div className="p-8">
        <div className="text-3xl font-bold mb-4">Al Result</div>
        <div className="text-2xl font-semibold mb-4">Aortic Segmentation</div>
        <div className="flex space-x-4 mb-4">
          <Link href='WriteReport' className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Write a report
          </Link>
          {/* <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
            Al Result
          </button> */}
          {/* <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
            Aortic Segmentation
          </button> */}
        </div>
        {/* <div className="bg-white p-4 rounded-md shadow-md">
          <div className="text-xl font-semibold mb-2">Ultrasound Image of the Heart</div>
          <div className="flex justify-center">
            <div className="flex space-x-4">
            <Image
      src={Aortic}
      width={300}
      height={300}
      alt="Picture of the author"
    />
    
              <Image
      src={Segmentation}
      width={300}
      height={300}
      alt="Picture of the author"
    />
            </div>
          </div>
        </div> */}
         <div className="bg-white p-4 rounded-md shadow-md">
          <div className="text-xl font-semibold mb-2">Ultrasound Image of the Heart</div>
          <div className="flex justify-center">
           <div className="flex space-x-20">
            <div>
            <Image
      src={Aortic}
      width={300}
      height={300}
      alt="Aortic Ultrasound Image"
      className="rounded-2xl"
    />
    <p className="text-center">Aortic Ultrasound Image</p>
    </div>

              <div>
              <Image
      src={Segmentation}
      width={300}
      height={300}
      alt="Segmentation of the Ultrasound Image"
      className="rounded-2xl"
    />
    <p className="text-center">Segmentation of the Ultrasound Image</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}