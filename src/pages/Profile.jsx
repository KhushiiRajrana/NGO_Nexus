import React, { useState, useEffect } from "react";
import { UserCircle } from "lucide-react";
import "./Profile.css"; // Ensure this file is correctly linked

const Profile = ({ user, ngoList, setNgoList }) => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  // Load Data from Local Storage
  const [name, setName] = useState(localStorage.getItem("username") || user?.name || "Your Name");
  const [bio, setBio] = useState(localStorage.getItem("bio") || user?.bio || "Add a short bio...");
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || null);

  // Save Data to Local Storage on Change
  useEffect(() => {
    localStorage.setItem("username", name);
    localStorage.setItem("bio", bio);
    localStorage.setItem("profilePic", profilePic);
  }, [name, bio, profilePic]);

  if (!user) {
    return (
      <div className="profile-container">
        <UserCircle size={80} color="#a855f7" />
        <h2 className="title">Guest Profile</h2>
        <p className="email">Please <a href="/register">register</a> to access your profile.</p>
      </div>
    );
  }

  // Handle Profile Picture Upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle Image Upload for Post
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  // Handle Post Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !caption.trim()) return;

    const newPost = {
      id: Date.now(),
      name: title,
      work: caption,
      image: image,
      user: user.email,
    };

    setNgoList((prevList) => [...prevList, newPost]);
    setTitle("");
    setCaption("");
    setImage(null);
  };

  // Handle Like Button
  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  // Handle Comment Submission
  const handleComment = (postId, commentText) => {
    if (!commentText.trim()) return;

    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), commentText],
    }));
  };

  return (
    <div className="profile-container">
      {/* Profile Section */}
      <div className="profile-header">
        <label htmlFor="profile-upload" className="profile-pic">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-img" />
          ) : (
            <UserCircle size={80} color="#a855f7" />
          )}
          <input type="file" id="profile-upload" accept="image/*" onChange={handleProfilePicChange} hidden />
        </label>

        <div className="profile-info">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="editable-input name-input"
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="editable-input bio-input"
          />
        </div>
      </div>

      {/* Post Creation Form */}
      <div className="create-post-container">
        <h2>Create a Post</h2>
        <form onSubmit={handleSubmit} className="create-form">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input-field" />

          <label>Caption</label>
          <textarea value={caption} onChange={(e) => setCaption(e.target.value)} className="input-field" />

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

            {/* Like Button */}
            <div className="post-actions">
              <button className="like-btn" onClick={() => handleLike(post.id)}>❤️ {likes[post.id] || 0}</button>
            </div>

            {/* Comment Section */}
            <div className="comment-section">
              <input
                type="text"
                placeholder="Add a comment..."
                className="comment-input"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleComment(post.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              <ul>
                {(comments[post.id] || []).map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
