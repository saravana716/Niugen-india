import React from 'react';
import Hero from '../components/Hero';
import CategoryCards from '../components/CategoryCards';
import HomeAbout from '../components/HomeAbout';
import HomeServices from '../components/HomeServices';
import PremiumProjects from '../components/PremiumProjects';
import ProcessWhyChoose from '../components/ProcessWhyChoose';
import OurPromise from '../components/OurPromise';
import Testimonials from '../components/Testimonials';
import ProjectCtaBanner from '../components/ProjectCtaBanner';
import FAQ from '../components/FAQ';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import HorizontalScrollGallery from '../components/HorizontalScrollGallery';

const Home = () => {
  return (
    <PageTransition>
      <div className="home-page">
        <Hero />
        <ScrollReveal direction="up"><CategoryCards /></ScrollReveal>
        <ScrollReveal direction="up"><HomeAbout /></ScrollReveal>
        <ScrollReveal direction="up"><HomeServices /></ScrollReveal>
        <ScrollReveal direction="left"><PremiumProjects /></ScrollReveal>
        <HorizontalScrollGallery />
        <ScrollReveal direction="up"><ProcessWhyChoose /></ScrollReveal>
        <ScrollReveal direction="left"><OurPromise /></ScrollReveal>
        <ScrollReveal direction="up"><Testimonials /></ScrollReveal>
        <ScrollReveal direction="up"><ProjectCtaBanner /></ScrollReveal>
        <ScrollReveal direction="right"><FAQ /></ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Home;
