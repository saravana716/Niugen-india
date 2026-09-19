import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const StaggerReveal = ({ children, className = '', stagger = 0.1, yOffset = 50 }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Select all immediate children
    const elements = containerRef.current.children;
    
    gsap.fromTo(elements, 
      { y: yOffset, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default StaggerReveal;
