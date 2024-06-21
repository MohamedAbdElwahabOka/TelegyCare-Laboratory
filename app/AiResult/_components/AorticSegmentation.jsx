'use client'
import Image from 'next/image'
// import Aortic from '../img/Aortic.jpg'
// import Segmentation from '../img/Segmentation.jpg'
// import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
// import { createCanvas, loadImage } from 'canvas';
// import { Jimp } from 'jimp';
// import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import html2canvas from 'html2canvas';

export default function AorticSegmentation({PatientID}) {

  const router  = useRouter();  
  const searchParams = useSearchParams();
  const labRegNum = searchParams.get('labRegNum')
  const OriginalImgSrc = searchParams.get('OriginalImgSrc')
  const SegmentedImgSrc = searchParams.get('SegmentedImgSrc')
  console.log(labRegNum)
  console.log(process.env.NEXT_PUBLIC_MODEL_HOST_UPLOAD + OriginalImgSrc)
  console.log(process.env.NEXT_PUBLIC_MODEL_HOST_OUTPUT + SegmentedImgSrc)

  const captureImage = async () => {
    const element = document.getElementById('overlayImages');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
  
    // Store imgData in local storage
    localStorage.setItem('overlayImages', imgData);
  };




  return (
    <div>
      <div className="p-8">
        <div className="text-3xl font-bold mb-4">Al Result</div>
        <div className="text-2xl font-semibold mb-4">Aortic Segmentation</div>
        <div className="flex space-x-4 mb-4">
          <button 
          onClick={() =>{
            router.push(`/WriteReport/${PatientID}?labRegNum=${labRegNum}&SegmentedImgSrc=${SegmentedImgSrc}`);
            captureImage();
            // captureImage2
          }
            
          }
          href='WriteReport' 
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Write a report
          </button>
          
        </div>
       
       <div className="bg-white p-4 rounded-md shadow-md">
            <div className="text-xl font-semibold mb-2">Ultrasound Image of the Heart</div>
            <div className="flex justify-center">
              <div className="flex space-x-20">
                <div id="aorticImage">
                  <Image
                    src={process.env.NEXT_PUBLIC_MODEL_HOST_UPLOAD + SegmentedImgSrc}
                    width={300}
                    height={300}
                    alt="Aortic Ultrasound Image"
                    className="rounded-2xl"
                  />
                  <p className="text-center">Aortic Ultrasound Image</p>
                </div>

                <div>
                  <Image
                    src={process.env.NEXT_PUBLIC_MODEL_HOST_OUTPUT + SegmentedImgSrc}
                    width={300}
                    height={300}
                    alt="Segmentation of the Ultrasound Image"
                    className="rounded-2xl"
                  />
                  <p className="text-center">Segmentation of the Ultrasound Image</p>
                </div>
                <div id="overlayImages" style={{ position: 'relative', width: 300, height: 300 }}>
                  <Image
                    src={process.env.NEXT_PUBLIC_MODEL_HOST_UPLOAD + SegmentedImgSrc}
                    width={300}
                    height={300}
                    alt="Aortic Ultrasound Image"
                    className="rounded-2xl"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                  />
                  <Image
                    src={process.env.NEXT_PUBLIC_MODEL_HOST_OUTPUT + SegmentedImgSrc}
                    width={300}
                    height={300}
                    alt="Segmentation of the Ultrasound Image"
                    className="rounded-2xl"
                    style={{ position: 'absolute', top: 0, left: 0, opacity: 0.5 }}
                  />
                  <p className="text-center">Overlay of Aortic Ultrasound Image and Segmentation</p>

                </div>
                {/* <button onClick={captureImage}>Capture Image</button> */}
              </div>
            </div>
       </div>
      </div>
    </div>
  )
}

