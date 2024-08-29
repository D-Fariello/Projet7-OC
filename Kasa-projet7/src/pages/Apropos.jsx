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
      [index]: !prevState[index],
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
          <li className={`a-propos-cards ${openDropdowns[0] ? "open" : ""}`}>
            <h3>Fiabilité </h3>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`cheveron-up ${openDropdowns[0] ? "open" : ""}`}
              onClick={() => toggleDropdown(0)}
            />
            {openDropdowns[0] && (
              <div className="dropdown-content">
                <p>
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
                </p>
              </div>
            )}
          </li>
          <li className={`a-propos-cards ${openDropdowns[1] ? "open" : ""}`}>
            <h3>Respect</h3>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`cheveron-up ${openDropdowns[1] ? "open" : ""}`}
              onClick={() => toggleDropdown(1)}
            />
            {openDropdowns[1] && (
              <div className="dropdown-content">
                <p>
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.
                </p>
              </div>
            )}
          </li>
          <li className={`a-propos-cards ${openDropdowns[2] ? "open" : ""}`}>
            <h3>Service</h3>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`cheveron-up-2 ${openDropdowns[2] ? "open" : ""}`}
              onClick={() => toggleDropdown(2)}
            />
            {openDropdowns[2] && (
              <div className="dropdown-content">
                <p>
                  La qualité du service est au cœur de notre engagement chez
                  Kasa. Nous veillons à ce que chaque interaction, que ce soit
                  avec nos hôtes ou nos locataires, soit empreinte de respect et
                  de bienveillance.
                </p>
              </div>
            )}
          </li>
          <li className={`a-propos-cards ${openDropdowns[3] ? "open" : ""}`}>
            <h3>Sécurité</h3>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`cheveron-up ${openDropdowns[3] ? "open" : ""}`}
              onClick={() => toggleDropdown(3)}
            />
            {openDropdowns[3] && (
              <div className="dropdown-content">
                <p>
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
                </p>
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
