import React from 'react';
import Hero from '../components/Hero';
import PropertySearch from '../components/PropertySearch';
import PremiumProjects from '../components/PremiumProjects';
import WhyChooseUs from '../components/WhyChooseUs';
import PlotAvailability from '../components/PlotAvailability';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <PageTransition>
      <div className="home-page">
        <Hero />
        <ScrollReveal><PropertySearch /></ScrollReveal>
        <ScrollReveal><PremiumProjects /></ScrollReveal>
        <ScrollReveal><WhyChooseUs /></ScrollReveal>
        <ScrollReveal><PlotAvailability /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Home;
