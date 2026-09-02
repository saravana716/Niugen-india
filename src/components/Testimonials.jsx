import React, { useRef, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "Excellent project and amazing infrastructure. Very happy with the investment. Highly recommended!",
    name: "Ramesh Kumar",
    project: "Greenfield City",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    text: "Great location, good amenities and transparent process. Niu Gen India Infras is truly trustworthy.",
    name: "Anitha Raj",
    project: "Royal Meadows",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "Professional team and quick support. The plot booking process was smooth and easy.",
    name: "Suresh Babu",
    project: "Sunrise Avenue",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Only auto-scroll if it's scrollable (i.e., on mobile slider)
        if (scrollWidth > clientWidth) {
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
          }
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="header-left">
            <span className="subtitle">TESTIMONIALS</span>
            <h2 className="title">What Our Customers Say</h2>
          </div>
          <div className="header-right">
            <a href="#testimonials" className="view-all-link">
              VIEW ALL TESTIMONIALS 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-nav prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="testimonials-grid" ref={scrollRef}>
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-secondary)" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{t.name}</h4>
                    <p className="author-project">{t.project}</p>
                  </div>
                </div>
                <div className="testimonial-image">
                  <img src={t.image} alt={t.name} />
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-nav next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
