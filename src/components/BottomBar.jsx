import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Plus, BarChart2, LogIn, UserCircle } from "lucide-react";
import "./BottomBar.css"; // Import CSS for styling

const BottomBar = ({ showLeaderboard, setShowLeaderboard, user }) => {
  const location = useLocation();

  const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "NGOs", url: "/ngos", icon: Users }, // Changed to Users icon to avoid confusion
    { title: "Create", url: "/create", icon: Plus },
  ];

  return (
    <div className="bottom-bar">
      {items.map((item) => (
        <Link key={item.title} to={item.url} className="nav-item">
          <item.icon size={28} />
        </Link>
      ))}

      {/* Show Leaderboard button only on Home Page */}
      {location.pathname === "/" && (
        <button className="nav-item" onClick={() => setShowLeaderboard(!showLeaderboard)}>
          <BarChart2 size={28} />
        </button>
      )}

      {/* Corrected Profile Link */}
      <Link to={user ? "/profile" : "/register"} className="nav-item">
        <UserCircle size={28} />
      </Link>
    </div>
  );
};

export default BottomBar;
