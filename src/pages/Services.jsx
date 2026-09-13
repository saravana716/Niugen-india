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
        <ScrollReveal direction="left"><ServicesSection /></ScrollReveal>
        <ScrollReveal direction="right"><OurProcess /></ScrollReveal>
        <ScrollReveal direction="up"><AboutContactBanner /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Services;
