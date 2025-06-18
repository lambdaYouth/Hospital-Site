import React from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/header.css';
import logo from './assets/Icons/hosp-logo3.png';
import nabh from './assets/Icons/nabh.png';
import nabl from './assets/Icons/nabl.png';

const menuItems = ['Services', 'International', 'Contact Us'];

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg-purple d-flex justify-content-center">
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
                  {item === 'International' ? (
                    <Link to="/international" className="nav-link text-white">{item}</Link>
                  ) : 
                  item === 'Contact Us' ? (
                    <Link to="/contact" className="nav-link text-white">{item}</Link>
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
