import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './MediaGallery.css';
import StaggerReveal from './StaggerReveal';

import galleryImg1 from '../assets/gallerimg1.jpeg';
import galleryImg2 from '../assets/galleryimg2.jpeg';
import galleryImg3 from '../assets/galleryimg3.jpeg';
import galleryImg5 from '../assets/galleryimg5.jpeg';
import galleryImg6 from '../assets/galleryimg6.jpeg';
import galleryVideo1 from '../assets/galleryimg4.mp4';
import galleryVideo2 from '../assets/galleryvideo2.mp4';
import galleryVideo3 from '../assets/galleryvideo3.mp4';

const images = [
  { id: 1, title: 'Project Entrance', src: galleryImg1 },
  { id: 2, title: 'Villa Exterior View', src: galleryImg2 },
  { id: 3, title: 'Street & Greenery', src: galleryImg3 },
  { id: 4, title: 'Modern Amenities', src: galleryImg5 },
  { id: 5, title: 'Park & Recreation', src: galleryImg6 }
];

const videos = [
  { id: 1, title: 'Greenfield City - Project Overview', src: galleryVideo1, duration: 'Video' },
  { id: 2, title: 'Royal Meadows - Luxury Living', src: galleryVideo2, duration: 'Video' },
  { id: 3, title: 'Sunrise Avenue - Site Progress', src: galleryVideo3, duration: 'Video' },
  { id: 4, title: 'Sunrise Avenue - Site Progress', src: galleryVideo3, duration: 'Video' },
  { id: 5, title: 'Sunrise Avenue - Site Progress', src: galleryVideo3, duration: 'Video' },
  { id: 6, title: 'Sunrise Avenue - Site Progress', src: galleryVideo3, duration: 'Video' },
  { id: 7, title: 'Sunrise Avenue - Site Progress', src: galleryVideo3, duration: 'Video' },
  { id: 8, title: 'Sunrise Avenue - Site Progress', src: galleryVideo3, duration: 'Video' }
];

const filterTabs = ['All', 'Villa Plots', 'Residential Projects', 'Amenities', 'Site Views'];

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);
  
  useGSAP(() => {
    if (marqueeRef.current) {
      // Infinite horizontal scroll animation
      tweenRef.current = gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20, // Adjust speed here (higher = slower)
        repeat: -1
      });
    }
  }, { scope: marqueeRef });

  return (
    <section className="media-gallery-section">
      <div className="container">

        {/* Project Gallery Header */}
        <div className="section-header space-between">
          <div className="header-left">
            <h2 className="section-title">Project Gallery</h2>
            <div className="title-underline"></div>
          </div>

          <div className="gallery-filter-wrapper">
            {/* Desktop Filters */}
            <div className="gallery-filters desktop-only">
              {filterTabs.map(tab => (
                <button
                  key={tab}
                  className={`gallery-filter-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <div className="mobile-only">
              <button className="mobile-filter-btn" onClick={() => setIsFilterModalOpen(true)}>
                <span>Filter Gallery</span>
                <span className="filter-badge">{activeTab}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H21M7 12H17M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Image Grid with StaggerReveal */}
        <StaggerReveal className="image-grid" yOffset={40} stagger={0.15}>
          {images.map(image => (
            <div className="gallery-item" key={image.id}>
              <div className="gallery-img-wrapper">
                <img src={image.src} alt={image.title} />
              </div>
              <h4>{image.title}</h4>
            </div>
          ))}
        </StaggerReveal>

        {/* Project Videos Header */}
        <div className="section-header space-between videos-header">
          <div className="header-left">
            <h2 className="section-title">Project Videos</h2>
            <div className="title-underline"></div>
          </div>
          <a href="#all-videos" className="view-all-link">
            VIEW ALL VIDEOS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Video Grid Marquee */}
        <div 
          className="video-marquee-container"
          onMouseEnter={() => tweenRef.current?.pause()}
          onMouseLeave={() => tweenRef.current?.play()}
        >
          <div className="video-marquee-track" ref={marqueeRef}>
            {/* First set of videos */}
            <div className="video-grid">
              {videos.map((video, index) => (
                <div className="video-item" key={`v1-${index}`}>
                  <div
                    className="video-thumbnail-wrapper"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <video src={video.src} className="video-thumbnail" muted />
                    <div className="video-overlay">
                      <button className="play-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </button>
                      <span className="video-duration">{video.duration}</span>
                    </div>
                  </div>
                  <h4>{video.title}</h4>
                </div>
              ))}
            </div>
            
            {/* Duplicated set for seamless loop */}
            <div className="video-grid">
              {videos.map((video, index) => (
                <div className="video-item" key={`v2-${index}`}>
                  <div
                    className="video-thumbnail-wrapper"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <video src={video.src} className="video-thumbnail" muted />
                    <div className="video-overlay">
                      <button className="play-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </button>
                      <span className="video-duration">{video.duration}</span>
                    </div>
                  </div>
                  <h4>{video.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedVideo(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="video-player-container">
              {/* Video Player for local mp4 files */}
              <video
                width="100%"
                height="100%"
                controls
                autoPlay
                src={selectedVideo.src}
                style={{ objectFit: 'contain' }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="modal-video-title">{selectedVideo.title}</h3>
          </div>
        </div>
      )}

      {/* Mobile Filter Modal */}
      {isFilterModalOpen && (
        <div className="mobile-filter-overlay" onClick={() => setIsFilterModalOpen(false)}>
          <div className="mobile-filter-bottom-sheet" onClick={e => e.stopPropagation()}>
            <div className="bottom-sheet-header">
              <h3>Filter Gallery</h3>
              <button className="close-sheet-btn" onClick={() => setIsFilterModalOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="bottom-sheet-content">
              {filterTabs.map(tab => (
                <button
                  key={tab}
                  className={`sheet-filter-option ${activeTab === tab ? 'selected' : ''}`}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsFilterModalOpen(false);
                  }}
                >
                  <div className="option-label">{tab}</div>
                  <div className="radio-circle">
                    {activeTab === tab && <div className="radio-inner"></div>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default MediaGallery;
