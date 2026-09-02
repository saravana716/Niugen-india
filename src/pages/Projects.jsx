import React from 'react';
import ProjectsHero from '../components/ProjectsHero';
import ProjectsList from '../components/ProjectsList';
import ContactStrip from '../components/ContactStrip';

const Projects = () => {
  return (
    <div className="projects-page">
      <ProjectsHero />
      <ProjectsList />
      <div className="container" style={{ paddingBottom: '40px' }}>
        <ContactStrip />
      </div>
    </div>
  );
};

export default Projects;
