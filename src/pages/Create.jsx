import React, { useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">Upload Here</h1>
      
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-sm flex flex-col gap-4"
      >
        {/* Title Input */}
        <label className="text-white font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-400 bg-white text-black"
        />

        {/* Caption Input */}
        <label className="text-white font-medium">Caption</label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-400 bg-white text-black"
        />

        {/* Image Upload */}
        <label className="text-white font-medium">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 rounded-md border border-gray-400 bg-white text-black"
        />

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full p-3 mt-4 rounded-md bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold"
        >
          Upload Meme
        </button>
      </form>
    </div>
  );
};

export default Create;
