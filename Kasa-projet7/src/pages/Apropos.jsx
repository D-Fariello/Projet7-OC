import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroCard from "../components/IntroCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Apropos = () => {
    // Use an object to track the open state of each dropdown
    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleDropdown = (index) => {
      setOpenDropdowns((prevState) => ({
        ...prevState,
        [index]: !prevState[index]
      }));
    };

  return (
    <>
      <Header />
      <main>
        <div className="entry-card-container">
          <IntroCard />
        </div>
        <ul className="a-propos-cards-container">
          <li className="a-propos-cards">
            <h3>Fiabilité </h3>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`cheveron-up ${openDropdowns[0] ? "open" : ""}`}
              onClick={() => toggleDropdown(0)}
            />
            {openDropdowns[0] && (
              <div className="dropdown-content">
                <p>Details about Fiabilité...</p>
              </div>
            )}
          </li>
          <li className="a-propos-cards">
            <h3>Respect</h3>
            <FontAwesomeIcon    icon={faChevronUp}
              className={`cheveron-up ${openDropdowns[1] ? "open" : ""}`}
              onClick={() => toggleDropdown(1)}
            />
            {openDropdowns[1] && (
              <div className="dropdown-content">
                <p>Details about Fiabilité...</p>
              </div>
            )}
          </li>
          <li className="a-propos-cards">
            <h3>Service</h3>
            <FontAwesomeIcon    icon={faChevronUp}
              className={`cheveron-up-2 ${openDropdowns[2] ? "open" : ""}`}
              onClick={() => toggleDropdown(2)}
            />
            {openDropdowns[2] && (
              <div className="dropdown-content">
                <p>Details about Fiabilité...</p>
              </div>
            )}
          </li>
          <li className="a-propos-cards">
            <h3>Sécurité</h3>
            <FontAwesomeIcon    icon={faChevronUp}
              className={`cheveron-up ${openDropdowns[3] ? "open" : ""}`}
              onClick={() => toggleDropdown(3)}
            />
            {openDropdowns[3] && (
              <div className="dropdown-content">
                <p>Details about Fiabilité...</p>
              </div>
            )}
          </li>
        </ul>
      </main>

      <Footer />
    </>
  );
};

export default Apropos;
