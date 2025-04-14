import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './stylesheets/header.css';
import logo from './assets/Icons/hosp-logo3.png';
import nabh from './assets/Icons/nabh.png';
import nabl from './assets/Icons/nabl.png';
import facebookLogo from './assets/Icons/facebook.png';
import twitterLogo from './assets/Icons/twitter.png';
import instagramLogo from './assets/Icons/instagram.png';
import linkedinLogo from './assets/Icons/linkedin.png';
import ambulanceLogo from './assets/Icons/ambulance_01.png';
import mailLogo from './assets/Icons/envelope.png';
import gpsLogo from './assets/Icons/location.png';
import stethoLogo from './assets/Icons/stethoscope.png';
import phoneLogo from './assets/Icons/phone.png';
import whatsappLogo from './assets/Icons/whatsapp.png';


const menuItems = ['About', 'Services', 'Facilities', 'Consultants', 'International', 'Blog', 'News & Media'];

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg-purple">
        <div className="container d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img src={facebookLogo} alt="Facebook" style={{ width: '2rem', marginRight: '2rem' }} />
            <img src={twitterLogo} alt="Twitter" style={{ width: '2rem', marginRight: '2rem' }} />
            <img src={instagramLogo} alt="Instagram" style={{ width: '2rem', marginRight: '2rem' }} />
            <img src={linkedinLogo} alt="Linkedin" style={{ width: '1.5rem', marginRight: '2rem' }} />
          </div>
          <div className="d-flex align-items-center">
            <img src={ambulanceLogo} alt="Ambulance" style={{ width: '2vh' }} />
            <a href="#" className="text-white margin-0">+91 44 66 900 900</a>
            <img src={phoneLogo} alt="Phone" style={{ width: '2vh' }} />
            <a href="#" className="text-white">+91 44 71 200 200</a>
            <img src={whatsappLogo} alt="Whatsapp" style={{ width: '3vh' }} />
            <a href="#" className="text-white">+91 96627 25555</a>
            <img src={stethoLogo} alt="Doctors" style={{ width: '2vh' }} />
            <a href="#" className="text-white">+91 76666 56 333, 76663 17 833</a>
            <img src={mailLogo} alt="Mail" style={{ width: '2vh' }} />
            <a href="mailto:abcxyz@gmail.com" className="text-white">Email Us</a>
            <img src={gpsLogo} alt="Location" style={{ width: '2vh' }} />
            <Link to="/contact" className='text-white'>Contact us </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className='logo'>
            <img src={logo} alt="Rajakrishnappa Hospitals"/>
          </Link>
          <div className="col-md-6">
            <div className="search-bar">
              <div className="input-group">
                <input type="text" className="form-control rounded-pill" placeholder="Search for Treatments, Disease, Symptoms..." />
                <button className="btn btn-outline-secondary rounded-pill" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-end">
            <img src={nabh} alt="NABH" style={{ marginRight: '10px', width: '25%' }} />
            <img src={nabl} alt="Certificate" style={{ width: '32%' }} />
          </div>
        </div>
      </header>

      {/* NavBar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-purple">
        <div className="container">
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {menuItems.map((item) => (
                <li className="nav-item" key={item}>
                  {item === 'About' ? (
                    <Link to="/about" className="nav-link text-white">{item}</Link>
                  ) : item === 'International' ? (
                    <Link to="/international" className="nav-link text-white">{item}</Link>
                  ) : (
                    <a className="nav-link text-white" href="#">{item}</a> // fallback or other links
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex">
            <select className="form-select">
              <option selected>Other Location</option>
              <option value="1">Chennai</option>
              <option value="2">Another Location</option>
            </select>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
