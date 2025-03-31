import React from 'react';
import './stylesheets/faq.css';

const faqs = [
  {
    question: "What are the visiting hours for patients?",
    answer: "Visiting hours are from 10:00 AM to 8:00 PM daily. Please ensure you follow all hospital guidelines during your visit.",
    id: "faqCollapse1"
  },
  {
    question: "How can I book an appointment with a doctor?",
    answer: "You can book an appointment by calling our helpline at +91 44 71 200 200 or through our online booking system available on the website.",
    id: "faqCollapse2"
  },
  {
    question: "Are emergency services available 24/7?",
    answer: "Yes, our emergency department operates round the clock to provide immediate medical assistance.",
    id: "faqCollapse3"
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans. Please contact our billing department for specific details regarding your insurance coverage.",
    id: "faqCollapse4"
  },
  {
    question: "Do you provide international patient services?",
    answer: "Yes, we have a dedicated international patient department to assist with all your needs, including travel, accommodation, and medical services.",
    id: "faqCollapse5"
  },
  {
    question: "Are there any discounts available for senior citizens?",
    answer: "Yes, we offer discounts for senior citizens on selected services. Please inquire at the billing counter for more details.",
    id: "faqCollapse6"
  },
  {
    question: "Do you have a pharmacy within the hospital premises?",
    answer: "Yes, we have a 24/7 pharmacy located within the hospital premises for your convenience.",
    id: "faqCollapse7"
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`faqHeading${index + 1}`}>
                <button
                  className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${faq.id}`}
                  aria-expanded={index === 0}
                  aria-controls={faq.id}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={faq.id}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`faqHeading${index + 1}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
