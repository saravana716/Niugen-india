import React from 'react';
import GalleryHero from '../components/GalleryHero';
import MediaGallery from '../components/MediaGallery';
import GalleryContactBanner from '../components/GalleryContactBanner';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <GalleryHero />
      <MediaGallery />
      <div className="container">
        <GalleryContactBanner />
      </div>
    </div>
  );
};

export default Gallery;
