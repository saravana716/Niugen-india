import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ParallaxHero = ({ bgImage, overlayClass, children, height = '400px', overlayColor, alignItems = 'center' }) => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    // Scroll Parallax
    gsap.to(bgRef.current, {
      yPercent: 40,
      scale: 1.25,
      ease: "power1.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: 0,
        end: "+=300",
        scrub: 1,
      }
    });
  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef}
      style={{
        position: 'relative',
        height: height,
        display: 'flex',
        alignItems: alignItems,
        overflow: 'hidden',
        zIndex: 1
      }}
      className="parallax-hero-section"
    >
      <div 
        ref={bgRef}
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-5%',
          width: '110%',
          height: '130%',
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          willChange: 'transform'
        }}
        className="parallax-hero-bg"
      ></div>
      
      {overlayClass ? (
        <div className={overlayClass}></div>
      ) : overlayColor ? (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: overlayColor,
          zIndex: 1
        }}></div>
      ) : null}
      
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {children}
      </div>
    </section>
  );
};

export default ParallaxHero;
