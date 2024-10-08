import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({data, head, contentType}) => {

    const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (index) => { //index: Represents the specific dropdown you want to toggle
    setOpenDropdowns((prevState) => ({ //prevState: Represents the current state before any changes.
      ...prevState, //This keeps all the existing dropdown states (whether they are open or closed) unchanged
      [index]: !prevState[index], //Purpose: Updates the state for the specific dropdown identified by index.
    }));
  };

  return (
    <ul className="a-propos-cards-container">
      <li className={`a-propos-cards ${openDropdowns[0] ? "open" : ""}`}>
        <h3>{data?.titre || head } </h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`cheveron-up ${openDropdowns[0] ? "open" : ""}`}
          onClick={() => toggleDropdown(0)}
        />
        {openDropdowns[0] && (
          <div className="dropdown-content">
            {(contentType === "description" || contentType === "content") && (
              <p>{data.content || data.description}</p>
            )}
            {contentType === "equipments" && (
              <ul>
                {data?.equipments?.map((equipment, index) => (
                  <li key={index} className="equipment"> 
                    {equipment}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </li>
    </ul>
  );
};

export default Dropdown;
