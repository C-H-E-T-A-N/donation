import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import NgoPage from "./Pages/NgoPage";
import Footer from "./components/Footer";
import NgoProfilePage from "./Pages/NgoProfilePage";
import SearchDropdown from "./page components/SearchBox";

function App() {
  return (
      <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/ngopage" element={<NgoPage/>} />
            <Route path="/ngoprofile/:id" element={<NgoProfilePage/>} />
            <Route path="/search" element={<SearchDropdown/>} />
          </Routes>
          <Footer/>
     </Router>
  );
}

export default App;
