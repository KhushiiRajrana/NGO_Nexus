import React from "react";
import "./NGOs.css";

const NGOs = ({ ngoList }) => {
  return (
    <div className="ngo-container">
      <h1 className="ngo-title">Registered NGOs</h1>
      <ul className="ngo-list">
        {ngoList.map((ngo) => (
          <li key={ngo.id} className="ngo-item">
            <img src={ngo.image} alt={ngo.name} className="ngo-image" />
            <h2 className="ngo-name">{ngo.name}</h2>
            <p className="ngo-work">{ngo.work}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGOs;
