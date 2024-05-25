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

export default function AorticSegmentation() {


  const searchParams = useSearchParams();
  const labRegNum = searchParams.get('labRegNum')
  const OriginalImgSrc = searchParams.get('OriginalImgSrc')
  const SegmentedImgSrc = searchParams.get('SegmentedImgSrc')
  console.log(labRegNum)
  console.log(process.env.NEXT_PUBLIC_BLOB + OriginalImgSrc)
  console.log(process.env.NEXT_PUBLIC_MODEL_HOST + SegmentedImgSrc)
  // const canvasRef = useRef(null);
  // const spanRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   FindWhitePixel(ctx, canvas);
  // }, []);


  // const changeImageColors = async (imageUrl) => {
  //   const image = await loadImage(imageUrl);
  //   const canvas = createCanvas(image.width, image.height);
  //   const ctx = canvas.getContext('2d');
  //   ctx.drawImage(image, 0, 0);
  
  //   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //   const data = imageData.data;
  
  //   for (let i = 0; i < data.length; i += 4) {
  //     if (data[i] === 255 && data[i + 1] === 255 && data[i + 2] === 255) {
  //       data[i] = 0; // R
  //       data[i + 1] = 128; // G
  //       data[i + 2] = 0; // B
  //     }
  //     if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) {
  //       data[i] = 0; // R
  //       data[i + 1] = 0; // G
  //       data[i + 2] = 0; // B
  //     }
  //   }
  
  //   ctx.putImageData(imageData, 0, 0);
  
  //   const jimpImage = new Jimp(canvas.width, canvas.height);
  //   jimpImage.bitmap.data = imageData.data;
  
  //   const backgroundRemovedImage = await jimpImage.backgroundRemoval({
  //     r: 0,
  //     g: 0,
  //     b: 0,
  //   });
  
  //   return backgroundRemovedImage.getBufferAsync(Jimp.MIME_JPEG);
  // };

  // const imageUrl = process.env.NEXT_PUBLIC_MODEL_HOST + SegmentedImgSrc;

  // const myFunction = async (imageUrl) => {
  //   return await changeImageColors(imageUrl);
  // };
  // const changedImage  = myFunction(imageUrl);

  // console.log(changedImage)



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