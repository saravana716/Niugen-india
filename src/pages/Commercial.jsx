import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import CustomSelect from '../components/CustomSelect';
import ParallaxHero from '../components/ParallaxHero';
import './Commercial.css';

const featuredProperties = [
  {
    id: 'cp1',
    title: 'Business Square',
    location: 'Kovilpatti',
    price: '12.00 Lakhs*',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
  },
  {
    id: 'cp2',
    title: 'Skyline Towers',
    location: 'Sattur',
    price: '18.00 Lakhs*',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
  },
  {
    id: 'cp3',
    title: 'Trade Center',
    location: 'Virudhunagar',
    price: '22.50 Lakhs*',
    image: 'https://images.unsplash.com/photo-1416339134316-0e91dc9dee87?w=600&q=80'
  },
  {
    id: 'cp4',
    title: 'Industrial Park',
    location: 'Sivakasi',
    price: '25.00 Lakhs*',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a8728?w=600&q=80'
  }
];

const categoryIcons = [
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', label: 'Shops' },
  { icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', label: 'Offices' },
  { icon: 'M4 4h16v16H4zM4 9h16M9 4v16M15 4v16', label: 'Showrooms' },
  { icon: 'M3 21v-8M21 21v-8M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4M12 3v18', label: 'Warehouses' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'Commercial Plots' }
];

const Commercial = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <PageTransition>
      <div className="commercial-page">
        {/* HERO SECTION */}
        <ParallaxHero 
          bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          overlayClass="com-hero-overlay"
        >
          <div className="container com-hero-content">
            <h1 className="com-hero-title">Spaces for<br/>Bigger Ideas</h1>
            <p className="com-hero-subtitle">Commercial Spaces for<br/>Growing Businesses</p>
          </div>
        </ParallaxHero>

        {/* SEARCH BAR SECTION */}
        <ScrollReveal direction="up">
          <section className="com-search-section">
            <div className="container">
              <div className="com-search-bar">
                <div className="com-filter-group">
                  <CustomSelect 
                    className="com-custom-select"
                    placeholder="Property Type"
                    value={propertyType}
                    onChange={setPropertyType}
                    options={[
                      { value: 'shop', label: 'Shop' },
                      { value: 'office', label: 'Office' },
                      { value: 'showroom', label: 'Showroom' }
                    ]}
                  />
                </div>
                <div className="com-filter-group">
                  <CustomSelect 
                    className="com-custom-select"
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
                <div className="com-filter-group">
                  <CustomSelect 
                    className="com-custom-select"
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
                <button className="com-search-btn">Search</button>
              </div>

              {/* ICONS ROW */}
              <div className="com-icons-row">
                {categoryIcons.map((item, index) => (
                  <div key={index} className="com-icon-item">
                    <div className="com-icon-circle">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
          <section className="com-featured-section">
            <div className="container">
              <div className="com-section-header">
                <h2 className="com-section-title">Featured Commercial Properties</h2>
                <Link to="/projects?category=commercial" className="com-view-all">
                  View All <span className="arrow">›</span>
                </Link>
              </div>

              <div className="com-properties-grid">
                {featuredProperties.map((prop) => (
                  <div key={prop.id} className="com-property-card">
                    <div className="com-property-image">
                      <img src={prop.image} alt={prop.title} />
                    </div>
                    <div className="com-property-content">
                      <h3 className="com-property-title">{prop.title}</h3>
                      <p className="com-property-location">{prop.location}</p>
                      <div className="com-property-price">₹ {prop.price}</div>
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

export default Commercial;
