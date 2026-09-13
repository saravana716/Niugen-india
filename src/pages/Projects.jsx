import React from 'react';
import ProjectsHero from '../components/ProjectsHero';
import ProjectsList from '../components/ProjectsList';
import ContactStrip from '../components/ContactStrip';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const Projects = () => {
  return (
    <PageTransition>
      <div className="projects-page">
        <ProjectsHero />
        <ScrollReveal><ProjectsList /></ScrollReveal>
        <ScrollReveal>
          <div className="container" style={{ paddingBottom: '0px' }}>
            <ContactStrip />
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Projects;
