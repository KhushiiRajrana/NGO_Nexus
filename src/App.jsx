import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import NGOs from "./pages/NGOs";
import Create from "./pages/Create";

export default function App() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <div className="min-h-screen pb-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ngos" element={<NGOs />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <BottomBar showLeaderboard={showLeaderboard} setShowLeaderboard={setShowLeaderboard} />
    </div>
  );
}
