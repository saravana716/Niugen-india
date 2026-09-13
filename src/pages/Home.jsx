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
        <ScrollReveal direction="up"><PropertySearch /></ScrollReveal>
        <ScrollReveal direction="left"><PremiumProjects /></ScrollReveal>
        <ScrollReveal direction="right"><WhyChooseUs /></ScrollReveal>
        <ScrollReveal direction="left"><PlotAvailability /></ScrollReveal>
        <ScrollReveal direction="up"><Testimonials /></ScrollReveal>
        <ScrollReveal direction="right"><FAQ /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Home;
