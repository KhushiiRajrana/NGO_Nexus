import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please enter all details");
      return;
    }

    // Update user state
    setUser({ name, email });

    // Redirect to profile page
    navigate("/profile");
  };

  return (
    <div className="create-container">
      <h1 className="title">Register</h1>

      <form onSubmit={handleSubmit} className="create-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
