import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroCard from "../components/IntroCard";

const Apropos = () => {
  return (
    <>
      <Header />
      <main>
        <div className="entry-card-container">
          <IntroCard />
        </div>
        <div className="a-propos-cards-container">
          <div className="a-propos-cards">
            <p>Fiabilité</p>
          </div>
          <div className="a-propos-cards">
            <p>Respect</p>
          </div>
          <div className="a-propos-cards">
            <p>Service</p>
          </div>
          <div className="a-propos-cards">
            <p>Sécurité</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Apropos;
