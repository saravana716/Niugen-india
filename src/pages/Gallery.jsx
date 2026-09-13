import React from 'react';
import GalleryHero from '../components/GalleryHero';
import MediaGallery from '../components/MediaGallery';
import GalleryContactBanner from '../components/GalleryContactBanner';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const Gallery = () => {
  return (
    <PageTransition>
      <div className="gallery-page">
        <GalleryHero />
        <ScrollReveal><MediaGallery /></ScrollReveal>
        <ScrollReveal>
          <div className="container">
            <GalleryContactBanner />
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Gallery;
