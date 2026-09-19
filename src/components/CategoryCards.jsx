import React from 'react';
import { Link } from 'react-router-dom';
import StaggerReveal from './StaggerReveal';
import './CategoryCards.css';

const categories = [
  {
    title: 'Land & Plots',
    link: '/projects/land-and-plots',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    active: true
  },
  {
    title: 'Residential',
    link: '/projects/residential',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    title: 'Commercial',
    link: '/projects/commercial',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    )
  },
  {
    title: 'Construction',
    link: '/projects/construction',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: 'Architects',
    link: '/projects/architects',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l-8 4v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V7z" />
        <path d="M8 13.5l4-2 4 2" />
        <path d="M12 11.5v6" />
      </svg>
    )
  },
  {
    title: 'Interior Design',
    link: '/projects/interior-design',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9" />
        <path d="M22 10L12 3 2 10" />
        <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      </svg>
    )
  },
  {
    title: 'Brands',
    link: '/projects/brands',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  }
];

const CategoryCards = () => {
  return (
    <section className="category-cards-section">
      <div className="container">
        <StaggerReveal className="category-cards-wrapper" yOffset={40} stagger={0.1}>
          {categories.map((cat, index) => (
            <Link key={index} to={cat.link} className={`category-card ${cat.active ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
              <div className="category-icon">
                {cat.icon}
              </div>
              <span className="category-title">{cat.title}</span>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default CategoryCards;
