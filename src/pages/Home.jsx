import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Updated CSS file

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="home-container">
      <div className="overlay"></div> {/* Smooth animated overlay */}
      <div className="content">
        <h1 className="fade-in">Welcome to NGO Nexus</h1>
        <p className="slide-up">
          A platform where NGOs can showcase their work and connect with government bodies.
        </p>
        
        <div className="button-group">
          <button className="explore-btn" onClick={() => navigate("/ngos")}>
            Explore More
          </button>
          <button className="register-btn" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
