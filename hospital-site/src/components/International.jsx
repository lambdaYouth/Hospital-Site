import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./stylesheets/international.css";
import Header from './Header';
import Footer from './Footer';

const International = () => {
    const initialState = {
        name: "",
        email: "",
        mobile: "",
        city: "",
        country: "",
        language: "",
        query: "",
      };
    
      const [formData, setFormData] = useState(initialState);
      const [errors, setErrors] = useState({});
    
      const validate = () => {
        const errs = {};
    
        if (!/^[A-Za-z ]{2,}$/.test(formData.name)) errs.name = "Enter a valid name";
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = "Enter a valid email";
        if (!/^\d{10,15}$/.test(formData.mobile)) errs.mobile = "Enter a valid mobile number";
        if (!/^[A-Za-z ]{2,}$/.test(formData.city)) errs.city = "Enter a valid city name";
        if (!/^[A-Za-z ]{2,}$/.test(formData.country)) errs.country = "Enter a valid country name";
        if (!/^[A-Za-z ,]{2,}$/.test(formData.language)) errs.language = "Enter valid languages";
        if (!formData.query.trim()) errs.query = "Query cannot be empty";
    
        setErrors(errs);
        return Object.keys(errs).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          alert("Form submitted successfully!");
          setFormData(initialState);
        }
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

  return (
    <><Header />
    <div className="international-page">

      {/* Hero Section */}
      <section className="bg-light text-dark py-5" style={{ backgroundImage: `url('/images/international-banner.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container py-5">
          <h2 className="fw-bold text-uppercase"><span id="head2">International</span><br/>Patient Centre</h2>
          <p className="lead">+91 89399 00 500</p>
          <Link to="/contact-coordinator" className="btn btn-primary">Contact our Coordinator</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5">
        <h3 className="mb-4 text-uppercase">About <span id="head3">International Patient Center</span></h3>
        <p>
          Rajakrishnappa Hospital welcomes all the international patients looking to be treated at our hospital. Our commitment in providing quality service to our international patients is thoroughly designed to exceed expectations in our hospital to make you feel as your home.
        </p>
        <p>
          We offer customized approaches for every international patient in providing individualized care with our comprehensive range of services and leading specialists. Our team of specialists are trained in such way to offer treatments in various surgical intervention procedures for the people of various socio-economic cultures for all ailments with the state of art infrastructure.
        </p>
        <p>
          Our team of coordinators and translators will assist you closely during all the stages your treatment from planning, travel, care to discharge. They will assist you in visa processing, arrival, registration, admission, treatment and until your discharge from the hospital. Your departure to homeland will be taken care by our team in order to provide you with utmost personal care.
        </p>
        <p>
          Even though you are with us for few days or weeks for treatment, our dedicated team with specialists, coordinators and other health care professionals will provide you all possible care and attention making you feel at home all the time.
        </p>
        <p>
          As we co-ordinate internationally across borders, we understand and can anticipate your needs. You may contact our representatives and coordinators by filling up the form present in this link.
        </p>
        <p>
          At our hospital, we provide a number of facilities like specially constructed prayer hall to support religious and cultural needs of our international patients.
        </p>

        {/* Services List */}
        <div className="mt-4">
          <h5>Before your visit we can assist you with:</h5>
          <ul className="list-unstyled">
            <li>✅ Appointment scheduling</li>
            <li>✅ Financial information</li>
            <li>✅ Visa assistance</li>
            <li>✅ Accommodation and transportation</li>
          </ul>
        </div>
      </section>
      {/* Contact Form */}
      <section className="container form">
        <h4 className="mb-4">Contact our Coordinator</h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <input type="text" className={`form-control ${errors.name && 'is-invalid'}`} name="name" value={formData.name} onChange={handleChange} placeholder="Name*" />
              <div className="invalid-feedback">{errors.name}</div>
            </div>
            <div className="col-md-4">
              <input type="email" className={`form-control ${errors.email && 'is-invalid'}`} name="email" value={formData.email} onChange={handleChange} placeholder="Email*" />
              <div className="invalid-feedback">{errors.email}</div>
            </div>
            <div className="col-md-4">
              <input type="text" className={`form-control ${errors.mobile && 'is-invalid'}`} name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile*" />
              <div className="invalid-feedback">{errors.mobile}</div>
            </div>
            <div className="col-md-4">
              <input type="text" className={`form-control ${errors.city && 'is-invalid'}`} name="city" value={formData.city} onChange={handleChange} placeholder="City*" />
              <div className="invalid-feedback">{errors.city}</div>
            </div>
            <div className="col-md-4">
              <input type="text" className={`form-control ${errors.country && 'is-invalid'}`} name="country" value={formData.country} onChange={handleChange} placeholder="Country*" />
              <div className="invalid-feedback">{errors.country}</div>
            </div>
            <div className="col-md-4">
              <input type="text" className={`form-control ${errors.language && 'is-invalid'}`} name="language" value={formData.language} onChange={handleChange} placeholder="Languages Preferred*" />
              <div className="invalid-feedback">{errors.language}</div>
            </div>
            <div className="col-12">
              <textarea className={`form-control ${errors.query && 'is-invalid'}`} name="query" rows="4" value={formData.query} onChange={handleChange} placeholder="Ask Your Query*"></textarea>
              <div className="invalid-feedback">{errors.query}</div>
            </div>
            {/* Buttons */}
            <div id="buttons">
              <button type="submit" className="btn btn-primary">Send Message</button>
              <button type="reset" className="btn btn-secondary" onClick={() => setFormData(initialState)}>Reset</button>
            </div>
          </div>
        </form>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default International;
