import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactSection from '../components/ContactSection';
import ContactMap from '../components/ContactMap';
import SiteVisitBanner from '../components/SiteVisitBanner';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  return (
    <PageTransition>
      <div className="contact-page">
        <ContactHero />
        <ScrollReveal><ContactSection /></ScrollReveal>
        <ScrollReveal><ContactMap /></ScrollReveal>
        <ScrollReveal><SiteVisitBanner /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Contact;
