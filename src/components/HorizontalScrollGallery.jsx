import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TextReveal from './TextReveal';
import './HorizontalScrollGallery.css';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { id: 1, title: 'Modern Villa', subtitle: 'Kovilpatti', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80' },
  { id: 2, title: 'Commercial Plaza', subtitle: 'City Center', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' },
  { id: 3, title: 'Green Living', subtitle: 'Eco Homes', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80' },
  { id: 4, title: 'Luxury Apartments', subtitle: 'Skyline View', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80' },
  { id: 5, title: 'Premium Plots', subtitle: 'Green Valley', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80' }
];

const HorizontalScrollGallery = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    // Calculate how far to move the track
    const track = trackRef.current;
    
    const getScrollAmount = () => {
      // The distance to move left is the full width of the track minus the viewport width
      let trackWidth = track.scrollWidth;
      return -(trackWidth - window.innerWidth);
    };

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // pin when top of section hits top of viewport
        end: () => `+=${getScrollAmount() * -1}`, // scroll distance equals horizontal distance
        pin: true,
        scrub: 1, // smooth scrubbing
        invalidateOnRefresh: true // recalculate on resize
      }
    });

  }, { scope: sectionRef });

  return (
    <section className="horizontal-gallery-section" ref={sectionRef}>
      <div className="horizontal-gallery-header">
        <h2 className="title">
          <TextReveal text="Featured Showcase" />
        </h2>
        <p className="subtitle">
          <TextReveal text="Scroll to explore our finest work." delay={0.2} />
        </p>
      </div>
      
      <div className="horizontal-gallery-track" ref={trackRef}>
        {galleryItems.map((item) => (
          <div key={item.id} className="horizontal-gallery-item">
            <div className="hg-image-container">
              <img src={item.image} alt={item.title} />
              <div className="hg-overlay"></div>
            </div>
            <div className="hg-info">
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScrollGallery;
