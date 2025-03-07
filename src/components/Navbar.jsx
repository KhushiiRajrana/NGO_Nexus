import React from "react";
import { Link } from "react-router-dom";
import { User, Compass, Pencil } from "lucide-react"; // Icons
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/profile" className="nav-item">
          <User size={24} />
          <span>Profile</span>
        </Link>
        <Link to="/explore" className="nav-item">
          <Compass size={24} />
          <span>Explore</span>
        </Link>
        <Link to="/register" className="nav-item">
          <Pencil size={24} />
          <span>Register</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
