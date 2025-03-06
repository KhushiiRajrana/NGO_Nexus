import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css"; // Import the CSS file for styling

const Create = ({ setNgoList }) => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNgo = {
      id: Date.now(),
      name: title,
      work: caption,
      image: image,
    };

    setNgoList((prevList) => [...prevList, newNgo]); // Update NGOs list
    navigate("/ngos"); // Redirect to NGOs page
  };

  return (
    <div className="create-container">
      <h1 className="title">Upload Here</h1>

      <form onSubmit={handleSubmit} className="create-form">
        {/* Title Input */}
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />

        {/* Caption Input */}
        <label>Caption</label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="input-field"
        />

        {/* Image Upload */}
        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="input-field"
        />

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Upload NGO
        </button>
      </form>
    </div>
  );
};

export default Create;
