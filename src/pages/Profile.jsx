import React, { useState } from "react";
import "./Profile.css"; // Import styling

const Profile = ({ user, ngoList, setNgoList }) => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  if (!user) {
    return <h2 className="profile-message">Please register or log in to view your profile.</h2>;
  }

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      name: title,
      work: caption,
      image: image,
      user: user.email, // Associate post with user
    };

    setNgoList((prevList) => [...prevList, newPost]); // Update both profile and main list
    setTitle("");
    setCaption("");
    setImage(null);
  };

  return (
    <div className="profile-container">
      <h1 className="title">{user.name}'s Profile</h1>
      <p className="email">{user.email}</p>

      {/* Post Creation Form */}
      <div className="create-post-container">
        <h2>Create a Post</h2>
        <form onSubmit={handleSubmit} className="create-form">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />

          <label>Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="input-field"
          />

          <label>Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="input-field" />

          <button type="submit" className="submit-btn">Post</button>
        </form>
      </div>

      {/* User's Posts */}
      <div className="user-posts">
        <h2>Your Posts</h2>
        {ngoList.filter(post => post.user === user.email).map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.name} className="post-image" />
            <h3>{post.name}</h3>
            <p>{post.work}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
