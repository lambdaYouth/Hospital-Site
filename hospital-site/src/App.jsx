import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactUs from "./components/Contact.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home.jsx";
import TermsPoli from "./components/TermsPoli.jsx";
import International from "./components/International.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/international" element={<International />} />
        <Route path="/terms-policies" element={<TermsPoli />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App;
