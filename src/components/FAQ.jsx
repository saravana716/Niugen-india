import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What type of properties does NIUGEN INDIA offer?',
    answer: 'We offer residential, plotted and commercial property opportunities depending on our current projects.'
  },
  {
    question: 'Can I schedule a site visit?',
    answer: 'Yes. Contact our team to schedule a convenient site visit.'
  },
  {
    question: 'Can I buy a property as an investment?',
    answer: 'Yes. Our team can help you explore properties that align with your investment objectives.'
  },
  {
    question: 'How can I enquire about a project?',
    answer: 'You can contact us by phone, WhatsApp or the enquiry form on our website.'
  },
  {
    question: 'Do you provide property assistance?',
    answer: 'Yes. Our team can assist you with property selection, project information and the purchase process.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="subtitle">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <div className="title-underline"></div>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
