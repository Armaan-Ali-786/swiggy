import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export default function ThumbnailCarousel  ({ images,handleThumbnailClick })  {

  let imgChange = () => {
    handleThumbnailClick(4)
 }

  return (
    <OwlCarousel className={`owl-theme mb-[100px]`} loop onChange={(e)=>console.log(e.loop)} items={1} dots={false}>
      {
        images.map((image, index) => (
          <div key={index} onChange={imgChange}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))
      }
    </OwlCarousel>
  );
};



