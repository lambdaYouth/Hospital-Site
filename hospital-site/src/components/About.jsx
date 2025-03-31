import React from 'react';
import './stylesheets/about.css'; 

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-md-6">
            <h2 style={{ color: '#513F95' }}>
              ABOUT<br />
              <strong>DR. KAMAKSHI MEMORIAL HOSPITAL</strong>
            </h2>
            <p style={{ color: '#000' }}>
              Dr.Kamakshi Memorial Hospital is a 300 bedded tertiary health care provider located at Pallikaranai in South Chennai, committed to a higher objective of delivering ultimate quality of health care with utmost excellence and personal care. Dr.Kamakshi Memorial Hospital is a nationally recognized forerunner and one of the premier institutions in providing Cancer and Cardiac care. Dr.Kamakshi Memorial Hospital houses highly educated scholars across all the specialities who are globally trained, equipped with advanced technology and infrastructure to deliver holistic medical service across the clock, around the year.
            </p>
            <a href="./about.html" className="btn btn-outline-primary">Read More...</a>
          </div>
        </div>
      </div>
      <div className="container mt-4 text-center bg-light">
        <div className="row g-4">
          {[
            { icon: 'fa-bed', text: '300 Beds' },
            { icon: 'fa-user-md', text: '150 Consultants' },
            { icon: 'fa-syringe', text: '45,000+ Surgeries' },
            { icon: 'fa-building', text: '180,000 Sq Ft Built Area' },
          ].map((item, index) => (
            <div className="col-md-3" key={index}>
              <i className={`fas ${item.icon} fa-2x text-purple`}></i>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
