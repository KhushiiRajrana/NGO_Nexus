import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NGOs from "./pages/NGOs";
import BottomBar from "./components/BottomBar";

function App() {
  const [ngoList, setNgoList] = useState([
    {
      id: 1,
      name: "Green Earth Initiative",
      work: "Tree Plantation & Environmental Awareness",
      image: "/images/green-earth.jpg",
    },
    {
      id: 2,
      name: "Food for All",
      work: "Providing meals to underprivileged communities",
      image: "/images/food-for-all.jpg",
    },
    {
      id: 3,
      name: "EduBridge",
      work: "Supporting education for rural children",
      image: "/images/edu-bridge.jpg",
    },
  ]);

  return (
    <Router>
      <div className="relative min-h-screen pb-16 bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create setNgoList={setNgoList} />} />
          <Route path="/ngos" element={<NGOs ngoList={ngoList} />} />
        </Routes>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
