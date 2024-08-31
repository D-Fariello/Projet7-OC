import React, { useState, useEffect } from "react";
import CarrouselLogement from "../components/CarrouselLogement";

const Logement = () => {
  const [carrouselPictures, setCarrouselPictures] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setCarrouselPictures(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main>
        {carrouselPictures.map((pictures, index) => (
          <CarrouselLogement
            key={index}
            data={{pictures: pictures.pictures}}
          />
        ))}
    </main>
  );
};

export default Logement;
