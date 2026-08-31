import React from 'react';
import ServicesSection from '../components/ServicesSection';
import OurProcess from '../components/OurProcess';
import AboutContactBanner from '../components/AboutContactBanner';

const Services = () => {
  return (
    <div className="services-page">
      <ServicesSection />
      <OurProcess />
      <AboutContactBanner />
    </div>
  );
};

export default Services;
