import React, { useState } from "react";
import "./NGOs.css";
import waterImage from "../assets/images/water.jpeg";
import plantationImage from "../assets/images/OIP.jpeg";
import cleanupImage from "../assets/images/cleanup.jpeg";
import educationImage from "../assets/images/education.jpeg";
import medicalImage from "../assets/images/medical.jpeg";

const NGOs = () => {
  const [ngoList, setNgoList] = useState([
    {
      id: 1,
      name: "Green Future",
      post: { type: "Plantation", caption: "Together, we grow a greener world!" },
      image: plantationImage,
    },
    {
      id: 2,
      name: "Save Earth",
      post: { type: "Beach Cleanup", caption: "Cleaning up today for a better tomorrow!" },
      image: cleanupImage,
    },
    {
      id: 3,
      name: "Pure Water",
      post: { type: "Water Conservation", caption: "Every drop counts! Join us in saving water." },
      image: waterImage,
    },
    {
      id: 4,
      name: "EducateAll",
      post: { type: "School Supplies", caption: "Books and knowledge for every child!" },
      image: educationImage,
    },
    {
      id: 5,
      name: "HealthCare+",
      post: { type: "Medical Camp", caption: "Bringing healthcare to those in need." },
      image: medicalImage,
    },
  ]);

  return (
    <div className="ngos-container">
      <h2>NGO List</h2>
      <div className="ngo-list">
        {ngoList.map((ngo) => (
          <div key={ngo.id} className="ngo-card">
            <img src={ngo.image} alt={ngo.name} className="ngo-image" />
            <h3>{ngo.name}</h3>
            <p><strong>{ngo.post.type}:</strong> {ngo.post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGOs;