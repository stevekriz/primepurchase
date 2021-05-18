import React, { useState } from 'react';
import LoadingSpinner from 'components/LoadingSpinner';

const ProductImages = ({ name, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='product-images'>
      <div className='active-image'>
        {images[activeIndex] ? (
          <img
            className='img-fluid mx-auto d-block'
            src={images[activeIndex]}
            alt={`${images[activeIndex]}`}
          />
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <div className='image-tiles'>
        {images.map((image, imgIdx) => {
          return (
            <div
              key={image}
              className='image-tile'
              data-is-selected={imgIdx === activeIndex}
              onMouseOver={() => setActiveIndex(imgIdx)}
            >
              <img src={image} alt={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
