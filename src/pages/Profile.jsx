import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import './Profile.css';

const ProfileCard = () => {
    const [name, setName] = useState('Mehak Sharma');
    const [bio, setBio] = useState('hey people!!');
    const [profilePic, setProfilePic] = useState(null);

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
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

export default ProfileCard;