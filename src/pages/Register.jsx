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
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input-field" />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
