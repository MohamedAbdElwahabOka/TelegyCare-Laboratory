'use client'
import Image from 'next/image'
import Aortic from '../img/Aortic.jpg'
import Segmentation from '../img/Segmentation.jpg'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
// import { createCanvas, loadImage } from 'canvas';
// import { Jimp } from 'jimp';
import { useRef, useEffect } from 'react';
import FindWhitePixel from './FindWhitePixel';
import { useRouter } from 'next/navigation';

export default function AorticSegmentation({PatientID}) {

  const router  = useRouter();  
  const searchParams = useSearchParams();
  const labRegNum = searchParams.get('labRegNum')
  const OriginalImgSrc = searchParams.get('OriginalImgSrc')
  const SegmentedImgSrc = searchParams.get('SegmentedImgSrc')
  console.log(labRegNum)
  console.log(process.env.NEXT_PUBLIC_BLOB + OriginalImgSrc)
  console.log(process.env.NEXT_PUBLIC_MODEL_HOST + SegmentedImgSrc)

  return (
    <div>
      <div className="p-8">
        <div className="text-3xl font-bold mb-4">Al Result</div>
        <div className="text-2xl font-semibold mb-4">Aortic Segmentation</div>
        <div className="flex space-x-4 mb-4">
          <button 
          onClick={() =>{
            router.push(`/WriteReport/${PatientID}?labRegNum=${labRegNum}&OriginalImgSrc=${OriginalImgSrc}&SegmentedImgSrc=${SegmentedImgSrc}`);
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
                <div>
                  <Image
                    src={process.env.NEXT_PUBLIC_BLOB + OriginalImgSrc}
                    width={300}
                    height={300}
                    alt="Aortic Ultrasound Image"
                    className="rounded-2xl"
                  />
                  <p className="text-center">Aortic Ultrasound Image</p>
                </div>

                <div>
                  <Image
                    src={process.env.NEXT_PUBLIC_MODEL_HOST + SegmentedImgSrc}
                    width={300}
                    height={300}
                    alt="Segmentation of the Ultrasound Image"
                    className="rounded-2xl"
                  />
                  <p className="text-center">Segmentation of the Ultrasound Image</p>
                </div>

                {/* <div> */}
                  {/* <Image
                    src={process.env.NEXT_PUBLIC_MODEL_HOST + SegmentedImgSrc}
                    width={300}
                    height={300}
                    alt="Another Ultrasound Image"
                    className="rounded-2xl"
                    style={{ filter: 'brightness(0) saturate(100%) hue-rotate(120deg)' }}
                  />
                  <canvas ref={canvasRef} />
                  <span ref={spanRef} />
                  <Component {...pageProps} /> */}
                  {/* <FindWhitePixel imageSrc={process.env.NEXT_PUBLIC_MODEL_HOST + SegmentedImgSrc} /> */}

                  {/* <p className="text-center">Another Ultrasound Image</p> */}
                {/* </div> */}
              </div>
            </div>
       </div>
      </div>
    </div>
  )
}

