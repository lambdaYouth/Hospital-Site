import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import About from './About';
import Specialties from "./Specialites";
import FAQ from "./Faq";
import ContactUs from "./Contact";

function Home() {
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

export default Home;