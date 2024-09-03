import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import CarrouselLogement from "../components/CarrouselLogement";
import DescriptionLogement from "../components/DescriptionLogement";
import RatingLogement from "../components/RatingLogement";

const Logement = () => {
  const { id } = useParams(); // Extract the id from the URL
  const [logementData, setLogementData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(false); // Add error state

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


  return (
    <main>
      <div className="carrousel-div">
        {/* Pass pictures array directly */}
        <CarrouselLogement pictures={logementData.pictures || []} />
      </div>
      <section className="description-section">
        <div className="description-info">
          <DescriptionLogement data={logementData} />
        </div>
        <div className="host-info">
          <RatingLogement data={logementData.host || {}} />
        </div>
      </section>
    </main>
  );
};

export default Logement;