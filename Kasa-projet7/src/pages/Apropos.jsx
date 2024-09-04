import React, { useEffect, useState } from "react";
import IntroCard from "../components/IntroCard";
import Dropdown from "../components/Dropdown";


const Apropos = () => {
    const [dataDropdown, setDataDropdown] = useState([]);

    useEffect(() => {
        // Fetch data from the JSON file
        fetch("../dropdownData.json")
          .then((response) => response.json())
          .then((data) => setDataDropdown(data))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

  return (
    <>
      <main>
        <div className="entry-card-container">
          <IntroCard />
        </div>
        <div className="data-container">
        {dataDropdown.map((data) => (
            <Dropdown key={data.titre} data={data}/> 
            ))}
        </div>
      </main>
    </>
  );
};

export default Apropos;
