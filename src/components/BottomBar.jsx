import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Plus, BarChart2 } from "lucide-react"; // Icon library
import "./BottomBar.css"; // Import the CSS file

const BottomBar = ({ showLeaderboard, setShowLeaderboard }) => {
  const location = useLocation(); // Get current page URL

  const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "NGOs", url: "/ngos", icon: User },
    { title: "Create", url: "/create", icon: Plus },
  ];

  return (
    <div className="bottom-bar">
      {items.map((item) => (
        <Link key={item.title} to={item.url}>
          <item.icon />
        </Link>
      ))}

      {/* Show Leaderboard button only on Home Page */}
      {location.pathname === "/" && (
        <button onClick={() => setShowLeaderboard(!showLeaderboard)}>
          <BarChart2 />
        </button>
      )}
    </div>
  );
};

export default BottomBar;
