import React from "react";

const CarrouselLogement = ({data}) => {

      return (
        <div className="carrousel-images-container">
          <img className="carrousel-images" src={data.pictures} alt="Logements" />
          <div className="div-arrows">
              <img className="arrow-left" src="/images/arrow-left.png" alt="fleche goche" />
              <img className="arrow-right" src="/images/arrow-right.png" alt="fleche droite"/>
          </div>
        </div>
    );
  };

export default CarrouselLogement;
