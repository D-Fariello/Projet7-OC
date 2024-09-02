import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const DescriptionLogement = ({ data }) => {

    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleDropdown = (index) => {
      setOpenDropdowns((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    };

  return (
    <>
      <div className="description-left-side">
        <h3 className="apartement-title"> {data?.title} </h3>
        <p className="apartement-location">{data?.location}</p>
      
        <div className="tags-container">
            {data?.tags?.map((tag, index) => (
            <span key={index} className="tag">
                {tag}
            </span>
            ))}
        </div>

        <div className="description-dropdown">
        <p className="p-description"> Description </p>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`cheveron-up ${openDropdowns[0] ? "open" : ""}`}
          onClick={() => toggleDropdown(0)}
        />
        {openDropdowns[0] && (
          <div className="dropdown-content">
            <p className="p-content">
              {data.description}
            </p>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default DescriptionLogement;
