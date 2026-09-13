import React from 'react';
import Hero from '../components/Hero';
import PropertySearch from '../components/PropertySearch';
import PremiumProjects from '../components/PremiumProjects';
import WhyChooseUs from '../components/WhyChooseUs';
import PlotAvailability from '../components/PlotAvailability';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <PropertySearch />
      <PremiumProjects />
      <WhyChooseUs />
      <PlotAvailability />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
