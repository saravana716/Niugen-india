import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/NIU GEN INDIA INFRAS LOGO.png';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <>
      {/* Top Header Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <div className="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Kovilpatti, Tamil Nadu, India
            </div>
            <div className="contact-item divider">|</div>
            <div className="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +91 63853 84189
            </div>
            <div className="contact-item divider">|</div>
            <div className="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              elevatedigitechnologies@gmail.com
            </div>
          </div>
          <div className="topbar-right">

            <div className="social-icons">
              <a href="#" className="social-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58zM9.5 15.5v-7l6.5 3.5-6.5 3.5z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar-main">
        <div className="container navbar-inner">
          <div className="logo-container">
            <img src={logoImage} alt="Niu Gen India Infras" className="navbar-logo-img" />
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="nav-links">
              <NavLink to="/" className="nav-item" end onClick={handleNavClick}>HOME</NavLink>
              <NavLink to="/about" className="nav-item" onClick={handleNavClick}>ABOUT US</NavLink>
              <NavLink to="/projects" className="nav-item has-dropdown" onClick={handleNavClick}>
                PROJECTS
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '2px', marginTop: '2px' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </NavLink>
              <NavLink to="/plot-availability" className="nav-item" onClick={handleNavClick}>PLOT AVAILABILITY</NavLink>
              <NavLink to="/services" className="nav-item" onClick={handleNavClick}>SERVICES</NavLink>
              <NavLink to="/gallery" className="nav-item" onClick={handleNavClick}>GALLERY</NavLink>
              <NavLink to="/contact" className="nav-item" onClick={handleNavClick}>CONTACT US</NavLink>
            </div>
            <button className="btn btn-primary enquire-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
