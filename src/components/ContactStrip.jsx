import React from 'react';
import './ContactStrip.css';

const ContactStrip = () => {
  return (
    <div className="contact-strip">
      <div className="contact-col main-col">
        <div className="icon-wrapper">
          <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" fill="#eff0f1ff" stroke="#e2e8f0" strokeWidth="1.5" />
            <path d="M22 36V28a10 10 0 0 1 20 0v8" stroke="#1c1366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="18" y="32" width="8" height="14" rx="4" stroke="#1c1366" strokeWidth="3" fill="#fff" />
            <rect x="38" y="32" width="8" height="14" rx="4" stroke="#1a8b38" strokeWidth="3" fill="#fff" />
            <path d="M22 44v3a4 4 0 0 0 4 4h4" stroke="#1c1366" strokeWidth="3" strokeLinecap="round" />
            <circle cx="35" cy="51" r="2.5" fill="#1c1366" />
          </svg>
        </div>
        <div className="contact-info">
          <span className="small-heading">Have Questions?</span>
          <h3>We're Here to Help!</h3>
          <p>Talk to our real estate experts and find the best property that suits your needs.</p>
        </div>
      </div>

      <div className="contact-col">
        <div className="icon-wrapper">
          <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" fill="#eff0f1ff" />
            <path d="M24.8 22.1c-.8-1.7-1.6-1.8-2.3-1.8h-2c-.7 0-1.8.3-2.7 1.2S15 24 15 28s3.4 8 3.9 8.7 5.9 9.3 14.3 12.6c7 2.8 8.4 2.3 9.9 2.1 1.5-.2 4.7-1.9 5.4-3.8.7-1.8.7-3.4.5-3.8-.2-.3-.7-.5-1.5-.9s-4.7-2.3-5.4-2.6c-.7-.3-1.2-.5-1.7.3s-2.1 2.6-2.6 3.1c-.5.5-1 .6-1.7.3-4.2-2.1-7.4-4.8-10.2-9.4-.5-.8-.1-1.2.3-1.6.4-.3.8-.9 1.2-1.4.4-.5.5-.8.8-1.4.3-.5.1-1-.1-1.4s-1.8-4.4-2.6-6.1z" fill="#1a8b38" />
          </svg>
        </div>
        <div className="contact-info">
          <span className="small-heading">Call Us Now</span>
          <h4>+91 63853 84189</h4>
          <p className="time">Mon - Sat (9:00 AM - 7:00 PM)</p>
        </div>
      </div>

      <div className="contact-col">
        <div className="icon-wrapper">
          <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" fill="#eff0f1ff" />
            <path d="M44.5 19.3A17.5 17.5 0 0 0 32 14.2a17.7 17.7 0 0 0-15.1 26.6L15 49.8l9.2-2.4A17.7 17.7 0 0 0 32 49.7a17.7 17.7 0 0 0 12.5-30.4zm-12.5 27.5a14.7 14.7 0 0 1-7.5-2.1l-.5-.3-5.6 1.5 1.5-5.4-.4-.6a14.7 14.7 0 1 1 12.5 6.9zM40 38.8c-.4 1.3-2.5 2.4-3.5 2.4s-2.2-.4-6.4-2.2c-5-2.1-8.2-7.2-8.4-7.5-.2-.3-2-2.6-2-5s1.1-3.6 1.4-3.9c.4-.3.9-.4 1.2-.4h.9c.3 0 .7-.1 1.1.7.4 1 1.4 3.4 1.5 3.7.1.3.2.7 0 1-.2.4-.4.6-.7.9-.3.3-.6.7-.8 1-.3.3-.6.6-.2 1.3.3.6 1.4 2.4 3 3.8 2 1.8 3.8 2.3 4.4 2.6.6.3 1 .2 1.3-.1.4-.4 1.3-1.6 1.7-2.1.3-.5.7-.4 1.2-.2 1 .3 2.8 1.4 3.3 1.6.5.3.8.4 1 .6.1.3.1 1.1-.3 2.4z" fill="#1a8b38" />
          </svg>
        </div>
        <div className="contact-info">
          <span className="small-heading">Chat on WhatsApp</span>
          <h4>+91 63853 84189</h4>
          <p className="time">We reply instantly</p>
        </div>
      </div>
    </div>
  );
};

export default ContactStrip;
