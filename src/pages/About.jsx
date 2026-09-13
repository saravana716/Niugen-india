import React from 'react';
import AboutHero from '../components/AboutHero';
import OurPromise from '../components/OurPromise';
import CoreValues from '../components/CoreValues';
import OurProcess from '../components/OurProcess';
import AboutContactBanner from '../components/AboutContactBanner';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <PageTransition>
      <div className="about-page" style={{backgroundColor: "var(--color-background)"}}>
        <AboutHero />
        <ScrollReveal direction="up"><OurPromise /></ScrollReveal>
        <ScrollReveal direction="left"><CoreValues /></ScrollReveal>
        <ScrollReveal direction="right"><OurProcess /></ScrollReveal>
        <ScrollReveal direction="up"><AboutContactBanner /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default About;
