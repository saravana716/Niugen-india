import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import LandAndPlots from './pages/LandAndPlots';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Construction from './pages/Construction';
import Architects from './pages/Architects';
import InteriorDesign from './pages/InteriorDesign';
import Brands from './pages/Brands';
import PlotAvailabilityPage from './pages/PlotAvailabilityPage';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import LegalApprovals from './pages/LegalApprovals';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import SplashScreen from './components/SplashScreen';
import ProjectDetails from './pages/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/land-and-plots" element={<LandAndPlots />} />
        <Route path="/projects/residential" element={<Residential />} />
        <Route path="/projects/commercial" element={<Commercial />} />
        <Route path="/projects/construction" element={<Construction />} />
        <Route path="/projects/architects" element={<Architects />} />
        <Route path="/projects/interior-design" element={<InteriorDesign />} />
        <Route path="/projects/brands" element={<Brands />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/plot-availability" element={<PlotAvailabilityPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* Official Legal & Compliance Routes */}
        <Route path="/legal-approvals" element={<LegalApprovals />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      // Hide splash screen after 1.0 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Make globally accessible for ScrollToTop
    window.lenis = lenis;

    // Update ScrollTrigger on lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      window.lenis = null;
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <SplashScreen key="splash" />
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Navbar />
              <AnimatedRoutes />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
