import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxHero from '../components/ParallaxHero';
import TextReveal from '../components/TextReveal';
import CustomSelect from '../components/CustomSelect';
import './Residential.css';

const featuredProperties = [
  {
    id: 'rp1',
    title: 'Elegance Villas',
    location: 'Kovilpatti',
    price: '35.00 Lakhs*',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'
  },
  {
    id: 'rp2',
    title: 'Premium Apartments',
    location: 'Sattur',
    price: '42.00 Lakhs*',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'
  },
  {
    id: 'rp3',
    title: 'Independent Houses',
    location: 'Virudhunagar',
    price: '28.50 Lakhs*',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80'
  },
  {
    id: 'rp4',
    title: 'Luxury Villas',
    location: 'Sivakasi',
    price: '55.00 Lakhs*',
    image: 'https://images.unsplash.com/photo-1600607687931-570a273f5a54?w=600&q=80'
  }
];

const categoryIcons = [
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', label: 'Villas' },
  { icon: 'M3 21v-8M21 21v-8M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4M12 3v18', label: 'Independent Houses' },
  { icon: 'M4 4h16v16H4zM4 9h16M9 4v16M15 4v16', label: 'Apartments' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'Gated Community' },
  { icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', label: 'Upcoming Projects' }
];

const Residential = () => {
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [location, setLocation] = useState("");

  return (
    <PageTransition>
      <div className="residential-page">
        {/* HERO SECTION */}
        <ParallaxHero 
          bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          overlayClass="res-hero-overlay"
        >
          <div className="container res-hero-content">
            <h1 className="res-hero-title">
              <TextReveal text="Find Your" /><br/>
              <TextReveal text="Dream Home" delay={0.2} />
            </h1>
            <TextReveal elementType="p" className="res-hero-subtitle" text="Premium Villas, Independent Houses and Apartments" delay={0.4} />
          </div>
        </ParallaxHero>

        {/* SEARCH BAR SECTION */}
        <ScrollReveal direction="up">
          <section className="res-search-section">
            <div className="container">
              <div className="res-search-bar">
                <div className="res-filter-group">
                  <CustomSelect 
                    className="res-custom-select"
                    placeholder="Property Type"
                    value={propertyType}
                    onChange={setPropertyType}
                    options={[
                      { value: 'villa', label: 'Villa' },
                      { value: 'apartment', label: 'Apartment' },
                      { value: 'house', label: 'Independent House' }
                    ]}
                  />
                </div>
                <div className="res-filter-group">
                  <CustomSelect 
                    className="res-custom-select"
                    placeholder="Budget"
                    value={budget}
                    onChange={setBudget}
                    options={[
                      { value: 'under-30', label: 'Under 30 Lakhs' },
                      { value: '30-50', label: '30 - 50 Lakhs' },
                      { value: 'above-50', label: 'Above 50 Lakhs' }
                    ]}
                  />
                </div>
                <div className="res-filter-group">
                  <CustomSelect 
                    className="res-custom-select"
                    placeholder="Bedrooms"
                    value={bedrooms}
                    onChange={setBedrooms}
                    options={[
                      { value: '1bhk', label: '1 BHK' },
                      { value: '2bhk', label: '2 BHK' },
                      { value: '3bhk', label: '3 BHK' }
                    ]}
                  />
                </div>
                <div className="res-filter-group">
                  <CustomSelect 
                    className="res-custom-select"
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
                <button className="res-search-btn">Search</button>
              </div>

              {/* ICONS ROW */}
              <div className="res-icons-row">
                {categoryIcons.map((item, index) => (
                  <div key={index} className="res-icon-item">
                    <div className="res-icon-circle">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FEATURED PROPERTIES SECTION */}
        <ScrollReveal direction="up">
          <section className="res-featured-section">
            <div className="container">
              <div className="res-section-header">
                <h2 className="res-section-title">Featured Residential Properties</h2>
                <Link to="/projects?category=residential" className="res-view-all">
                  View All <span className="arrow">›</span>
                </Link>
              </div>

              <div className="res-properties-grid">
                {featuredProperties.map((prop) => (
                  <div key={prop.id} className="res-property-card">
                    <div className="res-property-image">
                      <img src={prop.image} alt={prop.title} />
                    </div>
                    <div className="res-property-content">
                      <h3 className="res-property-title">{prop.title}</h3>
                      <p className="res-property-location">{prop.location}</p>
                      <div className="res-property-price">₹ {prop.price}</div>
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

export default Residential;
