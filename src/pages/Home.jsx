import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to NGO Nexus</h1>
        <p>
          A platform where NGOs can showcase their work and connect with government bodies.
        </p>
        <button className="explore-btn">Explore More</button>
      </div>
    </div>
  );
};

export default Home;
