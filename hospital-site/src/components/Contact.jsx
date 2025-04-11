import React, { useState } from 'react';
import './stylesheets/contact.css';
import Header from './Header';
import Footer from './Footer';

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
      <Header />

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
          <div className="mt-3 d-flex gap-2">
            <button type="submit" className="btn btn-primary">Send Message</button>
            <button type="reset" className="btn btn-secondary" onClick={() => setFormData({ name: '', email: '', mobileNumber: '', city: '', state: '', country: '', query: '' })}>Reset</button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
