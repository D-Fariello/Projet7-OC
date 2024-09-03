import React, { useState } from "react";

const CarrouselLogement = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  if (!pictures || pictures.length === 0) {
    return null;
  }

  return (
    <div className="carrousel-images-container">
      <img
        className="carrousel-images"
        src={pictures[currentIndex]}
        alt="Logements"
      />
      <div className="div-arrows">
        <img
          className="arrow-left"
          src="/images/arrow-left.png"
          alt="fleche goche"
          onClick={prevSlide}
        />
        <img
          className="arrow-right"
          src="/images/arrow-right.png"
          alt="fleche droite"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default CarrouselLogement;
