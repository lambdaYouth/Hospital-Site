import React from 'react';
import './stylesheets/specialities.css';
import cardioLogo from './assets/Icons/cardio.png';
import diabetLogo from './assets/Icons/Diabetology.png';
import entLogo from './assets/Icons/ent.png';
import gastroLogo from './assets/Icons/Gastroenterology.png';
import nephroLogo from './assets/Icons/Nephrology.png';
import neuroLogo from './assets/Icons/Neuro-Surgery-and-Trauma-Care.png';
import neuroloLogo from './assets/Icons/Neurology.png';
import obseLogo from './assets/Icons/Obstetrics-and-Gynaecology.png';

const specialtiesData = [
  {
    imgSrc: cardioLogo,
    alt: 'Cardiology',
    title: 'Cardiology',
    description: 'Our team of expert cardiologists are highly trained on both non-invasive and invasive treatments.',
  },
  {
    imgSrc: diabetLogo,
    alt: 'Diabetology',
    title: 'Diabetology',
    description: 'Diabetes is a disease which occurs in which your blood glucose/sugar levels are too high.',
  },
  {
    imgSrc: entLogo,
    alt: 'ENT',
    title: 'ENT',
    description: 'Ear, Nose and Throat consultants have a wide range of experience in any type of ENT problem.',
  },
  {
    imgSrc: gastroLogo,
    alt: 'Gastrology',
    title: 'Gastrology',
    description: 'We have a team of highly qualified consultant gastrologists who can solve every gastrology related issues.',
  },
  {
    imgSrc: nephroLogo,
    alt: 'Nephrology',
    title: 'Nephrology',
    description: 'A physician who has undertaken additional training in the subspecialty of nephrology.',
  },
  {
    imgSrc: neuroLogo,
    alt: 'Neurosurgery',
    title: 'Neurosurgery',
    description: 'Our team in RKH is specialized with the diagnosis and surgical treatment of disorders of the brain.',
  },
  {
    imgSrc: neuroloLogo,
    alt: 'Neurology',
    title: 'Neurology',
    description: 'Our Neurological team of medical, surgical, and rehabilitation expertise is among the best.',
  },
  {
    imgSrc: obseLogo,
    alt: 'Gynecology',
    title: 'Gynecology',
    description: 'A women health requirement changes with each stage of her life. We solve with utmost care and precision.',
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-5 bg-light">
      <div className="container text-center">
        <h2>Key Specialties</h2>
        <div className="row mt-4 g-4 justify-content-center">
          {specialtiesData.map((specialty, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="card border-0 shadow-sm align-items-center p-3">
                <img src={specialty.imgSrc} alt={specialty.alt} style={{ width: '50px' }} />
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
                <a href="#">Read More...</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
