import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactSection from '../components/ContactSection';
import ContactMap from '../components/ContactMap';
import SiteVisitBanner from '../components/SiteVisitBanner';

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactSection />
      <ContactMap />
      <SiteVisitBanner />
    </div>
  );
};

export default Contact;
