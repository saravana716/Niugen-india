import React, { useState } from 'react';
import './ContactSection.css';
import contactBanner from '../assets/contactbanner.jpeg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    emailAddress: '',
    enquiryAbout: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phoneNumber: '',
        whatsappNumber: '',
        emailAddress: '',
        enquiryAbout: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section className="contact-main-section">
      <div className="container">
        <div className="contact-grid">
          
          {/* Column 1: Get In Touch & New Form Layout (media_1793717897476_60f6e4ff.png) */}
          <div className="contact-page-col form-col">
            <div className="col-header">
              <h2>Let's Find the Right Property for You.</h2>
              <div className="title-underline"></div>
            </div>
            <p className="contact-desc">
              Whether you're planning to build your dream home or looking for a property investment, our team is ready to help.
            </p>
            
            <form className="contact-new-form" onSubmit={handleSubmit}>
              {/* Row 1: Full Name & Phone Number */}
              <div className="contact-form-group">
                <div className="contact-field-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C5232" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="contact-field-input"
                />
              </div>

              <div className="contact-form-group">
                <div className="contact-field-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C5232" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  required
                  className="contact-field-input"
                />
              </div>

              {/* Row 2: WhatsApp Number & Email Address */}
              <div className="contact-form-group">
                <div className="contact-field-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C5232" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  className="contact-field-input"
                />
              </div>

              <div className="contact-form-group">
                <div className="contact-field-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C5232" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="contact-field-input"
                />
              </div>

              {/* Row 3: Enquiry About * (Full Width Dropdown) */}
              <div className="contact-form-group full-width">
                <div className="contact-field-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C5232" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="18" />
                    <line x1="15" y1="22" x2="15" y2="18" />
                    <line x1="18" y1="18" x2="6" y2="18" />
                    <line x1="8" y1="6" x2="8.01" y2="6" />
                    <line x1="16" y1="6" x2="16.01" y2="6" />
                    <line x1="12" y1="6" x2="12.01" y2="6" />
                    <line x1="8" y1="10" x2="8.01" y2="10" />
                    <line x1="12" y1="10" x2="12.01" y2="10" />
                    <line x1="16" y1="10" x2="16.01" y2="10" />
                    <line x1="8" y1="14" x2="8.01" y2="14" />
                    <line x1="12" y1="14" x2="12.01" y2="14" />
                    <line x1="16" y1="14" x2="16.01" y2="14" />
                  </svg>
                </div>
                <select
                  name="enquiryAbout"
                  value={formData.enquiryAbout}
                  onChange={handleChange}
                  required
                  className="contact-field-input contact-field-select"
                >
                  <option value="" disabled>Enquiry About *</option>
                  <option value="residential-plots">Residential Plots &amp; Layouts</option>
                  <option value="commercial-plots">Commercial Plots &amp; Retail Spaces</option>
                  <option value="luxury-villas">Independent Luxury Villas</option>
                  <option value="construction">Construction &amp; Turnkey Contracting</option>
                  <option value="architectural-interior">Architectural &amp; Interior Design</option>
                  <option value="joint-venture">Joint Venture / Land Development</option>
                  <option value="site-visit">Schedule a Free Site Visit</option>
                  <option value="general">General Enquiry</option>
                </select>
                <div className="contact-select-chevron" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5232" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {/* Row 4: Your Message * (Full Width Textarea) */}
              <div className="contact-form-group full-width textarea-group">
                <div className="contact-field-icon textarea-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C5232" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  required
                  rows="4"
                  className="contact-field-input contact-field-textarea"
                ></textarea>
              </div>

              {/* Row 5: Submit Button & Security/Confidentiality Pill */}
              <div className="contact-form-submit-row full-width">
                <button type="submit" className="contact-new-submit-btn">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span>Send Enquiry</span>
                </button>

                <div className="contact-trust-pill" aria-label="Security guarantee">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F3A71E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Your information is safe and confidential.</span>
                </div>
              </div>

              {submitted && (
                <div className="contact-success-msg full-width">
                  Thank you! Your enquiry has been received. We will get back to you shortly.
                </div>
              )}
            </form>
          </div>

          {/* Column 2: Contact Information */}
          <div className="contact-page-col">
            <div className="col-header">
              <h2>Contact Information</h2>
              <div className="title-underline"></div>
            </div>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info-text">
                  <h5>Call Us</h5>
                  <p className="primary-text">+91 96888 66000</p>
                  <p className="sub-text">Mon - Sat (9:00 AM - 7:00 PM)</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-text">
                  <h5>Email Us</h5>
                  <p className="primary-text">niugeninfra2.0@gmail.com</p>
                  <p className="sub-text">We reply within 24 hours</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-text">
                  <h5>Visit Us</h5>
                  <p className="primary-text address-text">
                    No 121B/2, New Town Subha Nagar,<br/>Inammaniyachi, Kovilpatti,<br/>Thoothukudi District - 628 502.
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="info-text">
                  <h5>Follow Us</h5>
                  <div className="social-icons-row">
                    <a href="#" className="social-circle fb" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                    <a href="#" className="social-circle ig" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                    <a href="#" className="social-circle yt" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                    <a href="#" className="social-circle wa" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 3: Office Image */}
          <div className="contact-page-col img-col">
            <img 
              src={contactBanner} 
              alt="Niu Gen Office" 
              className="office-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
