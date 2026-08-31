import React from 'react';
import AboutHero from '../components/AboutHero';
import CoreValues from '../components/CoreValues';
import OurPromise from '../components/OurPromise';
import AboutContactBanner from '../components/AboutContactBanner';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <CoreValues />
      <OurPromise />
      <AboutContactBanner />
    </div>
  );
};

export default About;
