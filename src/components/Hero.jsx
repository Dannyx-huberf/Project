import React, { useEffect, useState } from 'react';
import {imagesList} from '../constants/properties';

function Hero(){
  const [imageToShow, setImageToShow] = useState(imagesList[1]);
  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 900) {
      setImageToShow(imagesList[4]);
    } else if (width >= 650) {
      setImageToShow(imagesList[0]);
    } else {
      setImageToShow(imagesList[1]);
    }
  };
  useEffect(() => {
    // Run once on mount
    handleResize();
    // Add resize listener
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(imageToShow);

  return (
    <div>
      <img src={imageToShow} alt="Responsive" className='w-full max-w-full '/>
    </div>
  );
};

export default Hero;
