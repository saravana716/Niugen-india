import React from 'react';
import PlotAvailabilityHero from '../components/PlotAvailabilityHero';
import InteractivePlotMap from '../components/InteractivePlotMap';
import ContactStrip from '../components/ContactStrip';

const PlotAvailabilityPage = () => {
  return (
    <div className="plot-availability-page">
      <PlotAvailabilityHero />
      <InteractivePlotMap />
      <div className="container contact-strip-container">
        <ContactStrip />
      </div>
    </div>
  );
};

export default PlotAvailabilityPage;
