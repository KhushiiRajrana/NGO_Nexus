import React, { useState } from "react";

const Create = () => {
  const [ngoName, setNgoName] = useState("");
  const [ngoWork, setNgoWork] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("NGO Created:", { ngoName, ngoWork });
    alert("NGO Created Successfully!");
    setNgoName("");
    setNgoWork("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Register Your NGO</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="NGO Name"
          value={ngoName}
          onChange={(e) => setNgoName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Brief Description of Work"
          value={ngoWork}
          onChange={(e) => setNgoWork(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Create;
