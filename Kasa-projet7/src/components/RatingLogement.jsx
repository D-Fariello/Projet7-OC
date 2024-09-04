import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faStar } from "@fortawesome/free-solid-svg-icons";

const RatingLogement = ({ data }) => {

  // Destructure rating and host from data
  const { rating, host } = data;

  const [openDropdowns, setOpenDropdowns] = useState({});

  console.log("RatingLogement data:", data);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5; // Define the total number of stars
    const stars = [];
    
    // Convert rating to number in case it's a string
    const numericRating = Number(rating);
    console.log("Numeric Rating:", numericRating);
  
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
    <>
      <div className="description-right-side">
        <div className="host-container">
          <h3 className="host-name"> {host?.name} </h3>
          <img
            src={host?.picture}
            alt="host picture"
            className="host-picture"
          />
        </div>

        <div className="rating-container">
          {renderStars(rating || 0)} {/* Fallback to 0 if rating is not available */}
        </div>

        <div className="equipments-dropdown">
          <p className="p-equipments"> Equipements </p>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`cheveron-up ${openDropdowns[0] ? "open" : ""}`}
            onClick={() => toggleDropdown(0)}
          />
          {openDropdowns[0] && (
            <div className="dropdown-content">
              <ul className="equipment-list">
                {data?.equipments?.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RatingLogement;
