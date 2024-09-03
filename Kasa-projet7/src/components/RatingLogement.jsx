import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const RatingLogement = ({ data }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  console.log("RatingLogement data:", data); 

  const toggleDropdown = (index) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <div className="description-right-side">
        <div className="host-container">
          <h3 className="host-name"> {data?.name} </h3>
          <img src={data?.picture} alt="host picture" className="host-picture" />
        </div>

        <div className="rating-container">
        <span className="rating-stars">{data?.ratings}</span>
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
              <p className="p-content">
              {data.equipments}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RatingLogement;
