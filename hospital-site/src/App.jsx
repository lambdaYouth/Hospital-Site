import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Specialties from "./components/Specialites";
import FAQ from "./components/Faq";
import ContactUs from "./components/Contact";


function App() {
  return (
    <>
     <Header />
     <Hero />
     <About />
     <Specialties />
     <FAQ />
     <Footer />
    </>
  )
}

export default App;
