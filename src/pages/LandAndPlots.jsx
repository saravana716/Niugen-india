import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import CustomSelect from '../components/CustomSelect';
import ParallaxHero from '../components/ParallaxHero';
import TextReveal from '../components/TextReveal';
import './LandAndPlots.css';

const featuredPlots = [
  {
    id: 'fp1',
    title: 'Greenfield City',
    location: 'Kovilpatti',
    price: '2.99 Lakhs*',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80'
  },
  {
    id: 'fp2',
    title: 'Lake View Plots',
    location: 'Sattur',
    price: '6.50 Lakhs*',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=600&q=80'
  },
  {
    id: 'fp3',
    title: 'Grand Township',
    location: 'Virudhunagar',
    price: '8.25 Lakhs*',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'
  },
  {
    id: 'fp4',
    title: 'Farm Land',
    location: 'Kovilpatti',
    price: '4.50 Lakhs*',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80'
  }
];

const LandAndPlots = () => {
  const [location, setLocation] = useState("");
  const [plotType, setPlotType] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <PageTransition>
      <div className="land-plots-page">
        {/* HERO SECTION */}
        <ParallaxHero 
          bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
          overlayClass="lp-hero-overlay"
          alignItems="flex-end"
        >
          <div className="container lp-hero-content">
            <h1 className="lp-hero-title">
              <TextReveal text="Land & Plots" />
            </h1>
            <TextReveal elementType="p" className="lp-hero-subtitle" text="Invest Today for a Brighter Tomorrow" delay={0.2} />
            
            <div className="lp-hero-badges">
              <div className="lp-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Prime Locations</span>
              </div>
              <div className="lp-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span>Clear Titles</span>
              </div>
              <div className="lp-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                <span>Great Appreciation</span>
              </div>
              <div className="lp-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>Trusted Deals</span>
              </div>
            </div>
          </div>
        </ParallaxHero>

        {/* SEARCH BAR SECTION */}
        <ScrollReveal direction="up">
          <section className="lp-search-section">
            <div className="container">
              <div className="lp-search-bar">
                <div className="lp-filter-group">
                  <CustomSelect 
                    className="lp-custom-select"
                    placeholder="Location"
                    value={location}
                    onChange={setLocation}
                    options={[
                      { value: 'kovilpatti', label: 'Kovilpatti' },
                      { value: 'sattur', label: 'Sattur' },
                      { value: 'virudhunagar', label: 'Virudhunagar' }
                    ]}
                  />
                </div>
                <div className="lp-filter-group">
                  <CustomSelect 
                    className="lp-custom-select"
                    placeholder="Plot Type"
                    value={plotType}
                    onChange={setPlotType}
                    options={[
                      { value: 'residential', label: 'Residential' },
                      { value: 'commercial', label: 'Commercial' },
                      { value: 'farmland', label: 'Farm Land' }
                    ]}
                  />
                </div>
                <div className="lp-filter-group">
                  <CustomSelect 
                    className="lp-custom-select"
                    placeholder="Budget"
                    value={budget}
                    onChange={setBudget}
                    options={[
                      { value: 'under-5', label: 'Under 5 Lakhs' },
                      { value: '5-10', label: '5 - 10 Lakhs' },
                      { value: 'above-10', label: 'Above 10 Lakhs' }
                    ]}
                  />
                </div>
                <button className="lp-search-btn">Search</button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FEATURED PLOTS SECTION */}
        <ScrollReveal direction="up">
          <section className="lp-featured-section">
            <div className="container">
              <div className="lp-section-header">
                <h2 className="lp-section-title">Featured Plots</h2>
                <Link to="/projects?category=land-and-plots" className="lp-view-all">
                  View All <span className="arrow">›</span>
                </Link>
              </div>

              <div className="lp-plots-grid">
                {featuredPlots.map((plot) => (
                  <div key={plot.id} className="lp-plot-card">
                    <div className="lp-plot-image">
                      <img src={plot.image} alt={plot.title} />
                    </div>
                    <div className="lp-plot-content">
                      <h3 className="lp-plot-title">{plot.title}</h3>
                      <p className="lp-plot-location">{plot.location}</p>
                      <div className="lp-plot-price">₹ {plot.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default LandAndPlots;
