import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css"; // Import CSS for styling

const Create = ({ setNgoList, user }) => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // Handle Image Upload
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  // Handle Post Creation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please register first to create a post.");
      navigate("/register");
      return;
    }

    const newPost = {
      id: Date.now(),
      name: title,
      work: caption,
      image: image,
      user: user.email, // Associate post with logged-in user
    };

    setNgoList((prevList) => [...prevList, newPost]); // Update NGOs list
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
          required
        />

        {/* Caption Input */}
        <label>Caption</label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="input-field"
          required
        />

        {/* Image Upload */}
        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="input-field"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Upload Post
        </button>
      </form>
    </div>
  );
};

export default Create;
