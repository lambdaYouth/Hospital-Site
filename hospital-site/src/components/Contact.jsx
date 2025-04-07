import React, { useState } from 'react';
import './stylesheets/contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    city: '',
    state: '',
    country: '',
    query: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileNumberRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(formData.name)) newErrors.name = 'Please enter a valid name (only letters and spaces).';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email.';
    if (!mobileNumberRegex.test(formData.mobileNumber)) newErrors.mobileNumber = 'Please enter a 10-digit mobile number.';
    if (!formData.city) newErrors.city = 'Please enter your city.';
    if (!formData.state) newErrors.state = 'Please enter your state.';
    if (!formData.country) newErrors.country = 'Please enter your country.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
      // Submit form logic here
    }
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar bg-purple">
        <div className="container d-flex justify-content-between">
          <div className="d-flex align-items-center">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, i) => (
              <img key={i} src={`./Icons/${icon}.png`} alt={icon} style={{ width: icon === 'linkedin' ? '2vh' : '3vh', marginRight: '2rem' }} />
            ))}
          </div>
          <div className="d-flex align-items-center">
            {[
              { icon: 'ambulance_01.png', text: '+91 44 66 900 900' },
              { icon: 'phone.png', text: '+91 44 71 200 200' },
              { icon: 'whatsapp.png', text: '+91 96627 25555' },
              { icon: 'stethoscope.png', text: '+91 76666 56 333, 76663 17 833' },
              { icon: 'envelope.png', text: 'Email Us' },
              { icon: 'location.png', text: 'Contact Us', link: './contact.html' },
            ].map((item, i) => (
              <>
                <img key={i} src={`./Icons/${item.icon}`} alt={item.text} style={{ width: '2vh' }} />
                <a href={item.link || '#'} className="text-white margin-0">{item.text}</a>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="./index.html" className="logo">
            <img src="./logo_color.png" alt="Dr. Kamakshi Memorial Hospitals" height="50" />
          </a>
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
            <img src="./Icons/nabh.png" alt="NABH" style={{ marginRight: '10px', width: '25%' }} />
            <img src="./Icons/nabl.png" alt="Certificate" style={{ width: '32%' }} />
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-purple">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {["About", "Services", "Facilities", "Consultants", "International", "Blog", "News & Media"].map((item, i) => (
                <li className="nav-item" key={i}><a className="nav-link text-white" href="#">{item}</a></li>
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

      {/* Contact Form */}
      <section id="contact-us" className="container my-5">
        <h2 className="text-center mb-4">Get In Touch</h2>
        <form className="needs-validation" onSubmit={handleSubmit}>
          {[{
            id: 'name', label: 'Name *', icon: 'person', type: 'text'
          }, {
            id: 'email', label: 'Email *', icon: 'envelope', type: 'email'
          }, {
            id: 'mobileNumber', label: 'Mobile Number *', icon: 'phone', type: 'tel'
          }, {
            id: 'city', label: 'City *', icon: 'geo-alt', type: 'text'
          }, {
            id: 'state', label: 'State *', icon: 'map', type: 'text'
          }, {
            id: 'country', label: 'Country *', icon: 'flag', type: 'text'
          }].map(({ id, label, icon, type }) => (
            <div className="mb-3" key={id}>
              <label htmlFor={id} className="form-label">{label}</label>
              <div className="input-group">
                <span className="input-group-text"><i className={`bi bi-${icon}`}></i></span>
                <input
                  type={type}
                  className={`form-control ${errors[id] ? 'is-invalid' : ''}`}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors[id]}</div>
              </div>
            </div>
          ))}
          <div className="mb-3">
            <label htmlFor="query" className="form-label">Ask Your Query</label>
            <textarea className="form-control" id="query" name="query" rows="4" value={formData.query} onChange={handleChange}></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
            <button type="reset" className="btn btn-secondary" onClick={() => setFormData({ name: '', email: '', mobileNumber: '', city: '', state: '', country: '', query: '' })}>Reset</button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h6 className="text-uppercase font-weight-bold">SPECIALITIES</h6>
              <hr className="mb-4" style={{ borderTop: '1px solid #fff' }} />
              <h6 className="text-uppercase font-weight-bold">FACILITIES</h6>
              <hr className="mb-4" style={{ borderTop: '1px solid #fff' }} />
              <img src="./Icons/nabh.png" alt="NABH certificate" className="img-fluid" style={{ maxWidth: '10%' }} />
              <img src="./Icons/nabl.png" alt="NABL certificate" className="img-fluid" style={{ maxWidth: '13%' }} />
            </div>
            <div className="col-md-4">
              <h6 className="text-uppercase font-weight-bold">DR.KAMAKSHI MEMORIAL HOSPITALS</h6>
              <hr className="mb-4" style={{ borderTop: '1px solid #fff' }} />
              <p><i className="fas fa-map-marker-alt"></i> No.1, Radial Road, Pallikaranai, Chennai - 600 100, Tamil Nadu, India</p>
              <p><i className="fas fa-phone"></i> +91 - 44 - 66 300 300 | 71 200 200</p>
              <p><i className="fas fa-mobile-alt"></i> +91 99627 25555</p>
              <p><i className="far fa-envelope"></i> Email Us</p>
              <p><i className="fas fa-globe"></i> www.drkmh.com</p>
              <p>CIN# U85110TN2004PTC054715</p>
            </div>
          </div>
          <div className="col">
            <div className="row d-flex justify-content-start">
              <ul className="d-flex list-unstyled">
                {["PRIVACY POLICY", "VIGIL MECHANISM POLICY", "CSR-POLICY", "TERMS OF USE", "CONTACT US"].map((item, i) => (
                  <li key={i}><a href="#" className="text-white mx-2">{item}</a></li>
                ))}
              </ul>
            </div>
            <hr className="mb-4" style={{ borderTop: '1px solid #fff' }} />
            <div className="col-md-8">
              <p>&copy; 2023 DR.KAMAKSHI MEMORIAL HOSPITAL PRIVATE LIMITED - ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
