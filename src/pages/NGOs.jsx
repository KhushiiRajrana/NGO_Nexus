import React from "react";

const NGOs = () => {
  const ngoList = [
    { id: 1, name: "Green Earth Initiative", work: "Tree Plantation & Environmental Awareness" },
    { id: 2, name: "Food for All", work: "Providing meals to underprivileged communities" },
    { id: 3, name: "EduBridge", work: "Supporting education for rural children" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Registered NGOs</h1>
      <ul className="mt-4 space-y-2">
        {ngoList.map((ngo) => (
          <li key={ngo.id} className="p-4 border rounded shadow-md">
            <h2 className="text-lg font-semibold">{ngo.name}</h2>
            <p className="text-gray-600">{ngo.work}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGOs;
