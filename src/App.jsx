import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NGOs from "./pages/NGOs";
import Create from "./pages/Create";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
