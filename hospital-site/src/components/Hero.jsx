import React from 'react';
import './stylesheets/hero.css';
import hero1 from './assets/Hero-images/chief.webp';
import hero2 from './assets/Hero-images/eecp_web.webp';
import hero3 from './assets/Hero-images/elekta_web.webp';
import hero4 from './assets/Hero-images/well-women-2025-mar-web-slider.jpg';
import hero5 from './assets/Hero-images/cancer_web.webp';

const Hero = () => {
  return (
    <section id="hero" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#hero"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {[
          { src: hero1, alt: 'Slide 1' },
          { src: hero2, alt: 'Slide 2' },
          { src: hero3, alt: 'Slide 3' },
          { src: hero4, alt: 'Slide 4' },
          { src: hero5, alt: 'Slide 5' },
        ].map((slide, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="3000" key={index}>
            <img src={slide.src} className="d-block w-100" alt={slide.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
