import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = ['/images/carousel1.jpg', '/images/carousel2.jpg', '/images/carousel3.jpeg'];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3500);
  
      return () => clearInterval(intervalId);
    }, [images.length]); // Include images.length in the dependency array
  
    return (
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            className={index === currentSlide ? 'slide active' : 'slide'}
            src={image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    );
  };
  
  export default Carousel;