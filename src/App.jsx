import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NGOs from "./pages/NGOs";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import BottomBar from "./components/BottomBar";
import Navbar from "./components/Navbar"; // ✅ Navbar Import Kiya

function App() {
  const [user, setUser] = useState(null);
  const [ngoList, setNgoList] = useState([]);

  return (
    <Router>
      <div className="relative min-h-screen pb-16 bg-black text-white">
        <Navbar />  {/* ✅ Navbar yaha add kiya hai */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} ngoList={ngoList} setNgoList={setNgoList} />} />
          <Route path="/create" element={<Create user={user} setNgoList={setNgoList} />} />
          <Route path="/ngos" element={<NGOs ngoList={ngoList} />} />
        </Routes>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
