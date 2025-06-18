import React from 'react';
import './stylesheets/footer.css';
import {Link} from 'react-router-dom';
import nabh from './assets/Icons/nabh.png';
import nabl from './assets/Icons/nabl.png';

const footerItems = ['PRIVACY POLICY', 'VIGIL MECHANISM POLICY', 'CSR-POLICY', 'TERMS OF USE', 'CONTACT US'];

const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h6 className="text-uppercase font-weight-bold">SPECIALITIES</h6>
            <hr className="mb-4" style={{ borderTop: '1px solid #fff' }} />
            <h6 className="text-uppercase font-weight-bold">FACILITIES</h6>
            <hr className="mb-4" style={{ borderTop: '1px solid #fff' }} />
            <img src={nabh} alt="NABH certificate" className="img-fluid" style={{ maxWidth: '10%' }} />
            <img src={nabl} alt="NABL certificate" className="img-fluid" style={{ maxWidth: '13%' }} />
          </div>
          <div className="col-md-4">
            <h6 className="text-uppercase font-weight-bold">RAJAKRISHNAPPA HOSPITALS</h6>
            <hr className="mb-4" style={{ borderTop: '1px solid #fff' }} />
            <p><i className="fas fa-map-marker-alt"></i> No.5, Halleys Road, Keelkattalai, Chennai - 600 100, Tamil Nadu, India</p>
            <p><i className="fas fa-phone"></i> +91 - 44 - 66 300 300 | 71 200 200</p>
            <p><i className="fas fa-mobile-alt"></i> +91 99627 25555</p>
            <p><i className="far fa-envelope"></i> Email Us</p>
            <p><i className="fas fa-globe"></i> www.rkph.com</p>
            <p>CIN# U85110TN2004PTC053859</p>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="col">
          <div className="row d-flex justify-content-start">
            <ul className="d-flex list-unstyled">
              {footerItems.map((item) => (
                <li key={item} style={{ marginRight: '15px' }}>
                {item === 'CONTACT US' ? (
                  <Link to="/contact" className="text-white">{item}</Link>
                ) : item === 'TERMS OF USE' ? (
                  <Link to="/terms-policies" className="text-white">{item}</Link>
                ) : (
                  <a href="#" className="text-white">{item}</a>
                )}
              </li>
              ))}
            </ul>
          </div>
          <hr className="mb-4" style={{ borderTop: '1px solid #fff' }} />
          <div className="col-md-8">
            <p>&copy; 2023 RAJAKRISHNAPPA HOSPITAL PRIVATE LIMITED - ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;
