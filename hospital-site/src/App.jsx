import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactUs from "./components/Contact.jsx";
import AboutUs from "./components/AboutUs.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App;
