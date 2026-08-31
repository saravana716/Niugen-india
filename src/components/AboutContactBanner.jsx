import React from 'react';
import './AboutContactBanner.css';

const AboutContactBanner = () => {
  return (
    <section className="about-contact-section">
      <div className="container">
        <div className="about-contact-banner">
          
          <div className="contact-col contact-col-main">
            <div className="contact-icon large">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14v-3a8 8 0 0 1 16 0v3"></path>
                <rect x="2" y="11" width="4" height="7" rx="2"></rect>
                <rect x="18" y="11" width="4" height="7" rx="2"></rect>
                <path d="M20 17v1a3 3 0 0 1-3 3h-4"></path>
                <circle cx="13" cy="21" r="1.5"></circle>
              </svg>
            </div>
            <div className="contact-text">
              <span className="subtitle">Have Questions?</span>
              <h3>We're Here to Help!</h3>
              <p>Talk to our real estate experts and find the best property that suits your needs.</p>
            </div>
          </div>

          <div className="contact-col contact-col-phone">
            <div className="contact-icon-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1a8b38">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27c1.12.37 2.33.57 3.58.57 1.1 0 2 .9 2 2V20c0 1.1-.9 2-2 2C9.39 22 2 14.61 2 5c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2 0 1.25.2 2.46.57 3.58.14.4.05.85-.27 1.11l-2.18 2.1z"/>
              </svg>
            </div>
            <div className="contact-text">
              <span className="subtitle">Call Us Now</span>
              <h4>+91 87540 45000</h4>
              <p className="time">Mon - Sat (9:00 AM - 7:00 PM)</p>
            </div>
          </div>

          <div className="contact-col contact-col-whatsapp">
            <div className="contact-icon-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a8b38">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.42 1.25 4.86L2 22l5.29-1.2C8.68 21.57 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.5 14.2c-.17.48-.82 1-1.2 1.05-.33.05-.78.11-2.27-.51-1.8-.75-2.95-2.58-3.04-2.7-.1-.13-2.15-2.87-2.15-5.48 0-2.6 1.35-3.88 1.84-4.43.43-.48 1.05-.55 1.37-.55h.35c.29 0 .68-.11 1.06.82.4 1 1.36 3.32 1.48 3.58.13.26.22.56.05.9-.17.33-.26.54-.53.86-.26.31-.55.67-.77.94-.25.3-.52.63-.22 1.14.3.51 1.32 2.18 2.83 3.53 1.94 1.74 3.58 2.27 4.1 2.52.52.26.83.21 1.14-.14.31-.35 1.32-1.54 1.67-2.07.35-.53.7-.44 1.18-.26.48.18 3.03 1.43 3.55 1.69.52.26.87.39 1 .61.13.22.13 1.28-.04 1.76z"/>
              </svg>
            </div>
            <div className="contact-text">
              <span className="subtitle">Chat on WhatsApp</span>
              <h4>+91 87540 45000</h4>
              <p className="time">We reply instantly</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutContactBanner;
