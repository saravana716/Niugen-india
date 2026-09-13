import React from 'react';
import ServicesSection from '../components/ServicesSection';
import OurProcess from '../components/OurProcess';
import AboutContactBanner from '../components/AboutContactBanner';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
  return (
    <PageTransition>
      <div className="services-page">
        <ScrollReveal><ServicesSection /></ScrollReveal>
        <ScrollReveal><OurProcess /></ScrollReveal>
        <ScrollReveal><AboutContactBanner /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Services;
