import React from "react";
import "./NGOs.css"; // Import the CSS file

const NGOs = () => {
  const ngoList = [
    { id: 1, name: "Green Earth Initiative", work: "Tree Plantation & Environmental Awareness" },
    { id: 2, name: "Food for All", work: "Providing meals to underprivileged communities" },
    { id: 3, name: "EduBridge", work: "Supporting education for rural children" },
  ];

  return (
    <div className="ngo-container">
      <h1>Registered NGOs</h1>
      <ul className="ngo-list">
        {ngoList.map((ngo) => (
          <li key={ngo.id} className="ngo-item">
            <h2>{ngo.name}</h2>
            <p>{ngo.work}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGOs;
