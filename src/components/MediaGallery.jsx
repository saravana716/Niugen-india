import React, { useState } from 'react';
import './MediaGallery.css';

const images = [
  { id: 1, title: 'Greenfield City', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Royal Meadows', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Sunrise Avenue', src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Serenity Villas', src: 'https://images.unsplash.com/photo-1600607687920-4e2a09be15c7?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Villa Exterior', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Internal Road', src: 'https://images.unsplash.com/photo-1517594422361-5e18aece015f?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Park & Green Area', src: 'https://images.unsplash.com/photo-1571216345479-79944d180860?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Street Lighting', src: 'https://images.unsplash.com/photo-1519504566373-f112e457f920?auto=format&fit=crop&q=80&w=800' }
];

const videos = [
  { id: 1, title: 'Greenfield City - Project Overview', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', duration: '01:25' },
  { id: 2, title: 'Royal Meadows - Luxury Living', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', duration: '01:40' },
  { id: 3, title: 'Sunrise Avenue - Site Progress', src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800', duration: '01:18' }
];

const filterTabs = ['All', 'Villa Plots', 'Residential Projects', 'Amenities', 'Site Views'];

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="media-gallery-section">
      <div className="container">
        
        {/* Project Gallery Header */}
        <div className="section-header space-between">
          <div className="header-left">
            <h2 className="section-title">Project Gallery</h2>
            <div className="title-underline"></div>
          </div>
          <div className="gallery-filters">
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
        </div>

        {/* Image Grid */}
        <div className="image-grid">
          {images.map(image => (
            <div className="gallery-item" key={image.id}>
              <div className="gallery-img-wrapper">
                <img src={image.src} alt={image.title} />
              </div>
              <h4>{image.title}</h4>
            </div>
          ))}
        </div>

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

        {/* Video Grid */}
        <div className="video-grid">
          {videos.map(video => (
            <div className="video-item" key={video.id}>
              <div 
                className="video-thumbnail-wrapper" 
                onClick={() => setSelectedVideo(video)}
              >
                <img src={video.src} alt={video.title} className="video-thumbnail" />
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
              {/* Placeholder iframe for YouTube/Vimeo video */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Video Player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="modal-video-title">{selectedVideo.title}</h3>
          </div>
        </div>
      )}

    </section>
  );
};

export default MediaGallery;
