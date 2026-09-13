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
        <ScrollReveal direction="left"><ContactSection /></ScrollReveal>
        <ScrollReveal direction="right"><ContactMap /></ScrollReveal>
        <ScrollReveal direction="up"><SiteVisitBanner /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Contact;
