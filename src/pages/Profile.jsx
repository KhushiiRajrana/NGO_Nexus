import React, { useState } from "react";
import "./Profile.css"; // Importing the CSS file

const Profile = () => {
    const [name, setName] = useState("Your Name");
    const [bio, setBio] = useState("Your bio here...");

    return (
        <div className="profile-container">
            <div className="profile-section">
                <div className="profile-pic"></div>
                <h2>{name}</h2>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Write your bio..."
                    className="bio-input"
                />
            </div>

            <div className="post-section">
                <h2>Create a Post</h2>
                <input type="text" placeholder="Title" className="input-field" />
                <textarea placeholder="What's on your mind?" className="textarea-field" />
                <input type="file" className="file-input" />
                <button className="post-button">Post</button>
            </div>
        </div>
    );
};

export default Profile;
