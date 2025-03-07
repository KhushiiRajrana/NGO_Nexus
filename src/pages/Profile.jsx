import React, { useState, useEffect } from "react";
import { UserCircle } from "lucide-react";
import "./Profile.css";

const Profile = ({ user, ngoList, setNgoList }) => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  const [name, setName] = useState(localStorage.getItem("username") || user?.name || "Your Name");
  const [bio, setBio] = useState(localStorage.getItem("bio") || user?.bio || "Add a short bio...");
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || null);

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

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
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
    </div>
  );
};

export default Profile;