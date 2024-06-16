// ThumbnailCarousel.js
import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function ThumbCarousel ({ images,selectedImageIndex }) {
    console.log(selectedImageIndex)
  return (
    <div className="w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className="thumbnail-item"
          style={{display:(selectedImageIndex == index) ? 'block' : 'none'}}
        >
          <img src={image} alt={`Thumbnail ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

