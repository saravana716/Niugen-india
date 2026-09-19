import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ text, elementType = 'span', className = '', delay = 0, stagger = 0.05 }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const words = containerRef.current.querySelectorAll('.reveal-word');
    
    gsap.fromTo(words, 
      { y: '120%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: stagger,
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%', // Trigger slightly earlier
          toggleActions: 'play none none none' // Play once
        }
      }
    );
  }, { scope: containerRef });

  // Split text by words or handle single child text
  const splitWords = (textString) => {
    if (typeof textString !== 'string') return textString;
    return textString.split(' ').map((word, index) => (
      <span 
        key={index} 
        style={{ 
          display: 'inline-block', 
          overflow: 'hidden',
          verticalAlign: 'top',
          marginRight: '0.25em' // space between words
        }}
      >
        <span 
          className="reveal-word" 
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
        >
          {word}
        </span>
      </span>
    ));
  };

  const Element = elementType;

  return (
    <Element ref={containerRef} className={className} style={{ display: elementType === 'span' ? 'inline-block' : undefined }}>
      {splitWords(text)}
    </Element>
  );
};

export default TextReveal;
