import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NGOs from "./pages/NGOs";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import BottomBar from "./components/BottomBar";
import Navbar from "./components/Navbar";
import greenFutureImg from "./assets/images/OIP.jpeg";
import cleanupImg from "./assets/images/cleanup.jpeg";
import waterImg from "./assets/images/water.jpeg";
import educationImg from "./assets/images/education.jpeg";
import medicalImg from "./assets/images/medical.jpeg";


function App() {
  const [user, setUser] = useState(null);
  const [ngoList, setNgoList] = useState([
    {
      id: 1,
      name: "Green Future",
      post: { type: "Plantation", caption: "Together, we grow a greener world!" },
      image: greenFutureImg,
      user: "admin"
    },
    {
      id: 2,
      name: "Save Earth",
      post: { type: "Beach Cleanup", caption: "Cleaning up today for a better tomorrow!" },
      image:  cleanupImg,
      user: "admin"
    },
    {
      id: 3,
      name: "Pure Water",
      post: { type: "Water Conservation", caption: "Every drop counts! Join us in saving water." },
      image: waterImg,
      user: "admin"
    },
    {
      id: 4,
      name: "EducateAll",
      post: { type: "School Supplies", caption: "Books and knowledge for every child!" },
      image: educationImg,
      user: "admin"
    },
    {
      id: 5,
      name: "HealthCare+",
      post: { type: "Medical Camp", caption: "Bringing healthcare to those in need." },
      image: medicalImg,
      user: "admin"
    }
  ]);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
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
