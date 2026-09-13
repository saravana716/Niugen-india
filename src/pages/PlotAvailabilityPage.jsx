import React from 'react';
import PlotAvailabilityHero from '../components/PlotAvailabilityHero';
import InteractivePlotMap from '../components/InteractivePlotMap';
import ContactStrip from '../components/ContactStrip';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const PlotAvailabilityPage = () => {
  return (
    <PageTransition>
      <div className="plot-availability-page">
        <PlotAvailabilityHero />
        <ScrollReveal><InteractivePlotMap /></ScrollReveal>
        <ScrollReveal>
          <div className="container contact-strip-container">
            <ContactStrip />
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default PlotAvailabilityPage;
