import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NGOs from "./pages/NGOs";
import BottomBar from "./components/BottomBar";
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/ngos" element={<NGOs />} />
        </Routes>
        <BottomBar />
      </div>
    </Router>
  );
}


export default App;
