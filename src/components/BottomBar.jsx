import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Plus, BarChart2 } from "lucide-react"; // Icon library

const BottomBar = ({ showLeaderboard, setShowLeaderboard }) => {
  const location = useLocation(); // Get current page URL

  const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "NGOs", url: "/ngos", icon: User },
    { title: "Create", url: "/create", icon: Plus },
  ];

  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-white text-black p-2 border-t shadow-md">
      {items.map((item) => (
        <Link key={item.title} to={item.url} className="flex items-center justify-center p-2 hover:bg-gray-200 rounded">
          <item.icon className="w-6 h-6" />
        </Link>
      ))}

      {/* Show Leaderboard button only on Home Page */}
      {location.pathname === "/" && (
        <button onClick={() => setShowLeaderboard(!showLeaderboard)} className="p-2 hover:bg-gray-200 rounded">
          <BarChart2 className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BottomBar;
