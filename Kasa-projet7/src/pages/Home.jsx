import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCards from "../components/ProfileCards";
import EntryCard from "../components/EntryCard";

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setCardData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="entry-card-container">
          <EntryCard />
        </div>

        <div className="profile-cards-container">
          {cardData.map((card) => (
            <ProfileCards key={card.id} title={card.title} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
