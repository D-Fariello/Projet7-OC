import React, { useState, useEffect } from "react";
import CarrouselLogement from "../components/CarrouselLogement";
import DescriptionLogement from "../components/DescriptionLogement";
import RatingLogement from "../components/RatingLogement";


const Logement = () => {
  const [carrouselPictures, setCarrouselPictures] = useState([]);
  const [descriptionTitle, setDescriptionTitle] = useState([]);
  const [hostData, setHostData] = useState({});

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setCarrouselPictures(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setDescriptionTitle(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setHostData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <main>
      <div className="carrousel-div">
      {carrouselPictures.map((pictures, index) => (
        <CarrouselLogement key={index} data={{ pictures: pictures.pictures }} />
      ))}
      </div>
        <section className="descritpion-section">
        <div className="description-info">
        {descriptionTitle.map((title, index) => (
          <DescriptionLogement key={index} data={title} />
        ))}
      </div>
      
    
      <div className="host-info">
      <RatingLogement data={hostData} />
      </div>
      </section>

    </main>
  );
};

export default Logement;
