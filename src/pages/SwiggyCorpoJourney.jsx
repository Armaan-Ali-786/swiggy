import React from 'react'
import ThumbnailCarousel from './MainCarousel';
import journey1 from '../images/journey1.png'
import journey2 from '../images/journey2.png'
import journey3 from '../images/journey3.png'
import journey4 from '../images/journey4.png'
import journey5 from '../images/journey5.png';
import journey11 from '../images/jorney-image.png'
import journey12 from '../images/jorney-image2.png'
import journey13 from '../images/jorney-image3.png'
import journey14 from '../images/jorney-image4.png'
import journey15 from '../images/jorney-image5.png';
import ThumbCarousel from './ThumbCarousel';
import { useState } from 'react';


export default function SwiggyCorpoJourney() {
   let images = [journey1,journey2,journey3,journey4,journey5]
   let images2 = [journey11,journey12,journey13,journey14,journey15]
   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };
    return (
        <div className='max-w-[1320px] mx-auto overflow-hidden'>
            <h4 className='font-semibold text-center text-[22px] mb-[50px]'>The Swiggy Journey</h4>
            <ThumbnailCarousel images={images} handleThumbnailClick={handleThumbnailClick}  />
            <ThumbCarousel images={images2}
        handleThumbnailClick={handleThumbnailClick} selectedImageIndex={selectedImageIndex}/>
        </div>
    )
}
