import React, { useState } from "react";
import "../styles/ImageCarousel.scss";
import img01 from '../../public/img/01.png';
import img02 from '../../public/img/02.png';
import img03 from '../../public/img/03.png';
import img04 from '../../public/img/04.png';

const ImageCarousel = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2015/05/08/22/04/wallpaper-758922_1280.png",
    "https://img.freepik.com/free-photo/glowing-lines-human-heart-3d-shape-dark-background-generative-ai_191095-1435.jpg",
    img01 ,
    "https://cdn.pixabay.com/photo/2015/05/08/22/04/wallpaper-758922_1280.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Flecha izquierda */}
      <div className="arrow left-arrow" onClick={goToPrevious}>
        ❮
      </div>

      {/* Imagen actual */}
      <div className="carousel-slide">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>

      {/* Flecha derecha */}
      <div className="arrow right-arrow" onClick={goToNext}>
        ❯
      </div>

      {/* Puntos indicadores */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
