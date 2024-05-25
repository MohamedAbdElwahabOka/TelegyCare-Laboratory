import { useRef, useEffect, useState } from 'react';

const FindWhitePixel = ({ imageSrc }) => {
  const canvasRef = useRef(null);
  const [whitePixels, setWhitePixels] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.crossOrigin = 'anonymous'; // Add this line
    image.src = imageSrc;
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const newWhitePixels = [];
      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i] === 255 && pixels[i + 1] === 255 && pixels[i + 2] === 255) {
          const x = (i / 4) % canvas.width;
          const y = Math.floor((i / 4) / canvas.width);
          newWhitePixels.push({ x, y });
        }
      }
      setWhitePixels(newWhitePixels);
    };
  }, [imageSrc]);

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
      {whitePixels.map((pixel, index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            top: `${pixel.y}px`,
            left: `${pixel.x}px`,
            width: '1px',
            height: '1px',
            backgroundColor: 'red',
          }}
        />
      ))}
    </div>
  );
};

export default FindWhitePixel;