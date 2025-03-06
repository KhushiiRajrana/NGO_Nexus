import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Plus, BarChart2, LogIn, UserCircle } from "lucide-react";
import "./BottomBar.css"; // Ensure you have CSS for styling

const BottomBar = ({ showLeaderboard, setShowLeaderboard, user }) => {
  const location = useLocation();

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

      {/* Show Profile or Register */}
      {user ? (
        <Link to="/profile">
          <UserCircle />
        </Link>
      ) : (
        <Link to="/register">
          <LogIn />
        </Link>
      )}
    </div>
  );
};

export default BottomBar;
