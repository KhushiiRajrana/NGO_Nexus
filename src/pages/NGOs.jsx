import React, { useState } from "react";
import "./NGOs.css";

const NGOs = () => {
  // ✅ Default NGO List with Images
  const [ngoList, setNgoList] = useState([
    {
      id: 1,
      name: "Green Future",
      post: { type: "Plantation", caption: "Together, we grow a greener world!" },
      image: "/assets/images/OIP.jpeg",
    },
    {
      id: 2,
      name: "Save Earth",
      post: { type: "Beach Cleanup", caption: "Cleaning up today for a better tomorrow!" },
      image: "/assets/images/cleanup.jpeg",
    },
    {
      id: 3,
      name: "Pure Water",
      post: { type: "Water Conservation", caption: "Every drop counts! Join us in saving water." },
      image: "/assets/iamges/water.jpeg",
    },
    {
      id: 4,
      name: "EducateAll",
      post: { type: "School Supplies", caption: "Books and knowledge for every child!" },
      image: "/assets/images/education.jpeg",
    },
    {
      id: 5,
      name: "HealthCare+",
      post: { type: "Medical Camp", caption: "Bringing healthcare to those in need." },
      image: "/assets/images/medical.jpeg",
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
