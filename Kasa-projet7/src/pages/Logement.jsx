import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import CarrouselLogement from "../components/CarrouselLogement";
// import DescriptionLogement from "../components/DescriptionLogement";
// import RatingLogement from "../components/RatingLogement";
import Dropdown from "../components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Logement = () => {
  const { id } = useParams(); // Extract the id from the URL
  const [logementData, setLogementData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(false); // Add error state
  const titleOne = "Description";
  const titleTwo = "Équipements";

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        // Find the selected logement based on the id
        const selectedLogement = data.find((item) => item.id === id);
        if (selectedLogement) {
          // Update state with the selected logement data
          setLogementData(selectedLogement);
        } else {
          // Set error if logementData is not found
          setError(true);
        }
        setIsLoading(false); // Set loading to false once fetching is done
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setIsLoading(false); // Set loading to false if there's an error
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>; // Show a loading message or a spinner
  }

  if (error) {
    return <Navigate to="/Error" replace />; // Redirect to the error page
  }

  if (!logementData) {
    // Redirect to the error page if no data is found
    return <Navigate to="/Error" replace />;
  }

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5; // Define the total number of stars
    const stars = [];

    // Convert rating to number in case it's a string
    const numericRating = Number(rating);

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= numericRating ? "rating-star colored" : "rating-star"}
        />
      );
    }
    return stars;
  };

  return (
    <main>
      <div className="carrousel-div">
        <CarrouselLogement pictures={logementData.pictures || []} />
      </div>

      <section className="title-host-name">
        <div className="apartment-info">
          <h3 className="apartement-title"> {logementData?.title} </h3>
          <p className="apartement-location">{logementData?.location}</p>
        </div>
      </section>

      <section className="apartment-host-info">
        <div className="tags-container">
          {logementData?.tags?.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="rating-host-container">
          <div className="rating-container">
            {renderStars(logementData.rating || 0)}
          </div>

          <div className="host-info">
            <h4 className="host-name"> {logementData?.host?.name} </h4>
            <img
              src={logementData?.host?.picture}
              alt="host picture"
              className="host-picture"
            />
          </div>
        </div>
      </section>

      <section className="description-section">
        <div className="description-info">
          <Dropdown data={logementData} head={titleOne} contentType="description" />
          <Dropdown data={logementData} head={titleTwo} contentType="equipments" />
        </div>
      </section>
    </main>
  );
};

export default Logement;
