import React, { useState } from "react";
import "./Create.css"; // Import the CSS file

const Create = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, caption, image });
  };

  return (
    <div className="create-container">
      <h1>Upload Here</h1>

      <form onSubmit={handleSubmit} className="create-form">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Caption</label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <label>Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <button type="submit">Upload Meme</button>
      </form>
    </div>
  );
};

export default Create;
