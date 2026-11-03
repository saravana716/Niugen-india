import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/a_clean_standalone_logo_on_a_white_background_no.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand */}
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <Link to="/" className="footer-logo-wrap" title="Niu Gen India Infras Home">
                  <img 
                    src={logoImage} 
                    alt="Niu Gen India Infras" 
                    className="footer-logo-img" 
                  />
                </Link>
              </div>
              <p className="footer-desc">
                Building stronger foundations and creating better futures through quality, innovation, and trust.
              </p>
              <div className="social-links">
                <a href="#facebook" className="social-icon" aria-label="Facebook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#instagram" className="social-icon" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#youtube" className="social-icon" aria-label="YouTube">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">QUICK LINKS</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/plot-availability">Plot Availability</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Projects */}
            <div className="footer-col">
              <h4 className="footer-heading">PROJECTS</h4>
              <ul className="footer-links">
                <li><Link to="/projects/land-and-plots">Land &amp; Plots</Link></li>
                <li><Link to="/projects/residential">Residential Projects</Link></li>
                <li><Link to="/projects/commercial">Commercial Projects</Link></li>
                <li><Link to="/projects/construction">Construction</Link></li>
                <li><Link to="/projects/architects">Architects</Link></li>
                <li><Link to="/projects/interior-design">Interior Design</Link></li>
                <li><Link to="/projects/brands">Brands</Link></li>
              </ul>
            </div>

            {/* Column 4: Useful Links */}
            <div className="footer-col">
              <h4 className="footer-heading">USEFUL LINKS</h4>
              <ul className="footer-links">
                <li><Link to="/legal-approvals">Legal Approvals</Link></li>
                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/disclaimer">Disclaimer</Link></li>
                <li><Link to="/contact">Site Visit Enquiry</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact Us */}
            <div className="footer-col contact-col-footer">
              <h4 className="footer-heading">CONTACT US</h4>
              <ul className="footer-contact">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>No 121B/2, New Town Subha Nagar,<br/>Inammaniyachi, Kovilpatti,<br/>Thoothukudi District - 628 502.</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>+91 96888 66000</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>niugeninfra2.0@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© 2026 NIU GEN INDIA INFRAS. All Rights Reserved.</p>
            <p>Designed and Developed by Elevate Digi Technologies.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
